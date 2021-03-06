import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';
import { Spinner } from 'reactstrap';

const NewsletterSubscribe = (data) => {

  

const url = "https://effectiveadvisor.us5.list-manage.com/subscribe/post?u=fc271be7a2a69c014ca103e3a&amp;id=49d1a1c9eb";
  const SimpleForm = (data) => <MailchimpSubscribe url={url}/>

  return (<>
   
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm 
     className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
        onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}><Spinner>
  Loading...
</Spinner> </div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Zapisany !</div>}
      </div>
    )}
  />
  </>
  );
};

export default NewsletterSubscribe;