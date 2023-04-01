export interface Breadcrumb {
    id: number;
    name: string;
    link: string;
}

export interface ListInterface {
    id: number;
    name: string;
    value: string;
    unavailable: boolean;
}

export interface DropdownInterface {
    children: React.ReactNode;
    dropdownButton: React.ReactNode,
    position?: '-translate-x-1/4' | '-translate-x-2/4' | '-translate-x-3/4',
    dropdownWidth: string,
    triggerState: string
}

export interface SummaryInfo {
    total: string;
    sub_total: string;
    quantity: number;
    currency: string;
    delivery: string;
    tax: string;
}