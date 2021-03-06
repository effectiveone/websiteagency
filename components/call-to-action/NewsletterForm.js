import { useState } from 'react';
import { sanitize } from '../../utils/miscellaneous.js';
import { Spinner } from 'reactstrap';

const NewsletterForm = ( { status, message, onValidated, classnametwo, classnameone }) => {
  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Wpisz poprawny adres e-mail' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <div>
    
      <h3 className="mb-1 uppercase font-bold">Zapisz się na newsletter</h3>
      <div className="flex newsletter-input-fields">
        <div className="mc-field-group">
      
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Twój e-mail"
            className={classnameone}
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className={classnametwo} onClick={handleFormSubmit}>
            Wyślij
          </button>
        </div>
      </div>
      <div className="min-h-42px">
        { 'sending' === status ? <Spinner>
  Loading...
</Spinner>  : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
    </div>
  );
}

export default NewsletterForm