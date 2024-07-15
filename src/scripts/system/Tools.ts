export class Tools {
    static massiveRequire(req: any): Array<{ key: string; data: any }> {
        const files: Array<{ key: string; data: any }> = [];

        req.keys().forEach((key: any) => {
            files.push({
                key,
                data: req(key)
            });
        });

        return files;
    }

    static randomNumber(min: number, max: number) {
        if (!max) {
            max = min;
            min = 0;
        }
        
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
