type TRequireContext = {
    keys(): string[];
    <T>(id: string): T;
    resolve(id: string): string;
}