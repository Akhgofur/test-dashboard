export interface IProduct {
    category: ICategory,
    brand: IBrand,
    description: string,
    guid: string,
    id: number,
    productImages : string[],
    productPricings: IPricing,
    sales: number,
    status: boolean,
    stock: number,
    title: string

}

export interface ISingleProduct {
    category: ICategory,
    brand: IBrand,
    description: string,
    guid: string,
    id: number,
    productImages : string[],
    sales: number,
    status: boolean,
    stock: number,
    title: string
    pricing: {
        guid: string,
        id: number,
        min_order: IMinOrder,
        price: string | number,
        product: number,
        tax: ITaxRule
    },
    specific : {
        dimension: string,
        guid: string,
        id: number,
        keyboard_language: IKeyboard,
        main_memory: IRam,
        product: number,
        storage: number,
        warranty: number,
        warranty_type: null | number,
        wright: string
    }

}


export interface IBrand {
    guid: string,
    id: number,
    title: string
}

export interface ICategory {
    guid: string,
    id: number,
    title: string
}


export interface IKeyboard {
    guid: string,
    id: number,
    title: string
}

export interface IRam {
    guid: string,
    id: number,
    title: string
}

export interface IRom {
    guid: string,
    id: number,
    title: string
}

export interface IWarranty {
    guid: string,
    id: number,
    title: string
}
export interface IWarrantyType {
    guid: string,
    id: number,
    title: string
}

export interface ITaxRule {
    guid: string,
    id: number,
    title: string
}

export interface IMinOrder {
    guid: string,
    id: number,
    title: string
}

export interface IPricing {
    min_order: number,
    price: string,
    tax: number
}