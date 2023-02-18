import { Request, Response, NextFunction } from 'express';

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class Validate {
    public  contactForm = async (req: Request, res: Response, next : NextFunction) => {

    const { name, email, message } = req.body;
    
    if (!name) { 
        res.status(400).send({ message: 'The "name" field is required' });
     }
    if (!email.match(regex)) { 
        res.status(400).send({ message: ' The "email" field must be in this format: "email@email.com"' }); 
    }
    if (!message) {
         res.status(400).send({ message: 'The field "name" is required' }); 
        }
    if (message.length < 20) { 
        res.status(400).send({ message: 'the field  "message" must to be at least 20 characters' }); 
    }

    next();
  };
};

const validate = new Validate()
export  default validate