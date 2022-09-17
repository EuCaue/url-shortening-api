import React, { FormEvent } from 'react';

import { Form, InputBox, SubmitButton, Span } from './styled';

export default function ShortForm() {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
  };

  return (
    <>
      <Form>
        <Span>
          <InputBox placeholder="Shorten It!"></InputBox>
          <SubmitButton
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          ></SubmitButton>
        </Span>
      </Form>
    </>
  );
}
