export interface GetcontactsInterface {
    code:   number;
    status: string;
    data:   Datum[];
}

export interface Datum {
    id:         number;
    name:       string;
    lastname:   string;
    created_at: Date | null;
    updated_at: Date | null;
    emails:     Address[];
    phones:     Address[];
    address:    Address[];
}

export interface Address {
    id:         number;
    contact_id: number;
    address?:   string;
    created_at: Date | null;
    updated_at: Date | null;
    email?:     string;
    phone?:     string;
}
