export enum DogSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

export enum DogGender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface Image {
    public_id: string;
    url: string;
}
