export class TitleConfig {
    defaults = {
        "dashboard": { title: 'Dashboard' },
        "form": { title: 'Upload Form' },
        "form-submitted": { title: 'Sucess Page' },
    }


    public get configs() {
        return this.defaults;
    }
}
