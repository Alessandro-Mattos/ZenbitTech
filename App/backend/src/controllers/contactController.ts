import { Request, Response } from 'express';
import IContactForm from '../interfaces/IContactform';
import ContactService from '../services/ContactFormService';


class ContactController {
  constructor(private contactService = new ContactService) { }

  public newForm = async (req: Request, res: Response):Promise<Response | undefined> => {
    const form = req.body as IContactForm;
    const formID = await this.contactService.newForm(form);
    if (!formID) { 
      return res.status(201).json({message: `your form was registered under id:${formID}`}); 
    } else {
      return res.status(503).json({message: `Database is down, contact the administrator`});
    }
    
  };
}

const contactController = new ContactController();
export default contactController;