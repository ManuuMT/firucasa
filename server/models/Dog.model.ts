export enum DogSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

export enum DogGender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export enum Animals {
    DOG = "DOG",
    CAT = "CAT"
}

export interface Image {
    public_id: string;
    url: string;
}
