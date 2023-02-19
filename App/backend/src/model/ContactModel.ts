import {Pool, ResultSetHeader} from 'mysql2/promise';
import IContactForm from "../interfaces/IContactform";

export default class ContactModel {
    private connection : Pool;

    constructor(connection : Pool) {
        this.connection = connection;
    }

    public async postForm(form : IContactForm): Promise < number > {
        const {
            name,
            email,
            message
        } = form;
        const query = 'INSERT INTO ZenbitTech.ContactForm(user_name, user_email, user_message) VALUES (?, ?, ?)';
        const [result] = await this.connection.query < ResultSetHeader > (query, [name, email, message]);
        return result.insertId;
    }
}
