import {writable, type Writable} from 'svelte/store';

export interface TableStore<T> {
    sortedData: Writable<T[]>;
    selectedRows: Writable<Set<T[keyof T]>>;
    selectAll: Writable<boolean>;
    expandedRows: Writable<Set<T[keyof T]>>;
    sortData: (columnKey: keyof T, direction: 'asc' | 'desc') => void;
    filterData: (searchQuery: string) => void;
    toggleRowSelectionRadio: (rowKey: T[keyof T]) => void;
    toggleRowSelection: (rowKey: T[keyof T]) => void;
    toggleSelectAll: () => void;
    toggleRowExpansion: (rowKey: T[keyof T]) => void;
    handleDragStart: (event: DragEvent, rowKey: T[keyof T]) => void;
    handleDrop: (event: DragEvent, rowKey: T[keyof T]) => void;
}

export function createTableStore<T extends Record<string, any>>(
    initialData: T[],
    keyField: keyof T
): TableStore<T> {
    const sortedData = writable([...initialData]);
    const selectedRows = writable(new Set<T[keyof T]>());
    const selectAll = writable(false);
    const expandedRows = writable(new Set<T[keyof T]>());

    let draggedRowKey: T[keyof T] | null = null;

    const sortData = (columnKey: keyof T, direction: 'asc' | 'desc') => {
        sortedData.update(data => {
            const sorted = [...data].sort((a, b) => {
                if (a[columnKey] < b[columnKey]) return direction === 'asc' ? -1 : 1;
                if (a[columnKey] > b[columnKey]) return direction === 'asc' ? 1 : -1;
                return 0;
            });
            return sorted;
        });
    };

    const filterData = (searchQuery: string) => {

    };


    const toggleRowSelectionRadio = (rowKey: T[keyof T]) => {
        selectedRows.update(selected => {
            const newSelected = new Set<T[keyof T]>();
            if (!selected.has(rowKey)) {
                newSelected.add(rowKey);
            }
            return newSelected;
        });
    };

    const toggleRowSelection = (rowKey: T[keyof T]) => {
        selectedRows.update(selected => {
            const newSelected = new Set(selected);
            if (newSelected.has(rowKey)) {
                newSelected.delete(rowKey);
            } else {
                newSelected.add(rowKey);
            }
            selectAll.set(newSelected.size === (sortedData as Writable<T[]>).subscribe(data => data.length));
            return newSelected;
        });
    };

    const toggleSelectAll = () => {
        selectAll.update(current => {
            if (!current) {
                sortedData.subscribe(data => {
                    const allKeys = data.map(row => row[keyField]);
                    selectedRows.set(new Set(allKeys));
                })();
                return true;
            } else {
                selectedRows.set(new Set());
                return false;
            }
        });
    };

    const toggleRowExpansion = (rowKey: T[keyof T]) => {
        expandedRows.update(expanded => {
            const newExpanded = new Set(expanded);
            if (newExpanded.has(rowKey)) {
                newExpanded.delete(rowKey);
            } else {
                newExpanded.add(rowKey);
            }
            return newExpanded;
        });
    };

    const handleDragStart = (event: DragEvent, rowKey: T[keyof T]) => {
        draggedRowKey = rowKey;
        if (event.dataTransfer) {
            event.dataTransfer.setData('text/plain', rowKey as any);
            event.dataTransfer.effectAllowed = 'move';
        }
    };

    const handleDrop = (event: DragEvent, targetRowKey: T[keyof T]) => {
        event.preventDefault();
        if (draggedRowKey === null) return;

        sortedData.update(data => {
            const draggedIndex = data.findIndex(row => row[keyField] === draggedRowKey);
            const targetIndex = data.findIndex(row => row[keyField] === targetRowKey);
            if (draggedIndex === -1 || targetIndex === -1) return data;

            const updatedData = [...data];
            const [movedRow] = updatedData.splice(draggedIndex, 1);
            updatedData.splice(targetIndex, 0, movedRow);
            return updatedData;
        });
        draggedRowKey = null;
    };

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }
    };

    return {
        sortedData,
        selectedRows,
        selectAll,
        expandedRows,
        sortData,
        filterData,
        toggleRowSelectionRadio,
        toggleRowSelection,
        toggleSelectAll,
        toggleRowExpansion,
        handleDragStart,
        handleDrop,
    };
}
