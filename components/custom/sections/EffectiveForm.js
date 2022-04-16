import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Button,
  } from "reactstrap";



function EffectiveForm() {
    const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
    const [hasErrored, setHasErrored] = useState(false);
    const { register, handleSubmit, formState } = useForm();
    const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;
  
    async function onSubmit(payload) {
      try {
        const res = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ subject: 'Email from contact form', ...payload }),
        });
  
        if (res.status !== 204) {
          setHasErrored(true);
        }
      } catch {
        setHasErrored(true);
        return;
      }
  
      setHasSuccessfullySentMail(true);
    }
  
    const isSent = isSubmitSuccessful && isSubmitted;
    const isDisabled = isSubmitting || isSent;
    const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;
  
    if (hasSuccessfullySentMail) {
      return <MailSentState />;
    }



  return (
<>
<Form onSubmit={handleSubmit(onSubmit)}>

{hasErrored && <ErrorMessage>Nie mogliśmy wysłać maila, spróbuj jeszcze raz..</ErrorMessage>}
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                          {errors.name && <ErrorMessage>Imię jest wymagane</ErrorMessage>}
                            <Input type="text" placeholder="Wpisz swoje imię" id="name" disabled={isDisabled} {...register('name', { required: true })} />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                          {errors.email && <ErrorMessage>Email jest wymagany</ErrorMessage>}
                            <Input type="text" placeholder="Twój Email" id="email" disabled={isDisabled} {...register('email', { required: true })} />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                          {errors.description && <ErrorMessage>Wiadomość jest wymagana</ErrorMessage>}
                            <Input
                              as="textarea"
                              placeholder="Wpisz swoją wiadomość..."
                              id="description"
                              disabled={isDisabled}
                              {...register('description', { required: true })}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit" disabled={isSubmitDisabled}
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              Wyślij <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
</>  )
}

export default EffectiveForm