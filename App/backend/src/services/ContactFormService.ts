import IContactForm from '../interfaces/IContactform';
import db_connection from '../model/db_connection';
import ContactModel from '../model/ContactModel';

export default class ContactService {
    public model : ContactModel;

    constructor() {
        this.model = new ContactModel(db_connection);
    }

    public async newForm(form : IContactForm): Promise < number | false > {
        const formID = await this.model.postForm(form);
        return ! formID ? false : formID;
    }
}
