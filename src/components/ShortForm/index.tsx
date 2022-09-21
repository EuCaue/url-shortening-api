/* eslint-disable camelcase */
import axios from 'axios';
import React, { FormEvent, useState } from 'react';

import {
  Form,
  InputBox,
  SubmitButton,
  Span,
  Container,
  ShortLink,
  ShortenLink,
  CopyButton,
  OriginalLink,
} from './styled';

export default function ShortForm() {
  interface ShortAPI {
    result: {
      code: string;
      full_short_link: string;
      original_link: string;
    };
  }

  const [urlParams, setUrlParams] = useState<string>();
  const [shortLink, setShortLink] = useState<string>();
  const [originalLink, setOriginalLink] = useState<string>();
  const baseAPI = 'https://api.shrtco.de/v2/shorten?url=';

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      const { data } = await axios.get<ShortAPI>(`${baseAPI}${urlParams}`);
      setOriginalLink(data.result.original_link);
      setShortLink(data.result.full_short_link);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Span>
            <InputBox
              placeholder="Shorten a link here..."
              onChange={(e) => setUrlParams(e.target.value)}
            />

            <SubmitButton type="submit">Shorten It!</SubmitButton>
          </Span>
        </Form>

        <ShortLink>
          <OriginalLink href={originalLink} target="_blank">
            {originalLink}
          </OriginalLink>
          <Span>
            <ShortenLink href={shortLink} target="_blank">
              {shortLink}
            </ShortenLink>
            <CopyButton>Copy</CopyButton>
          </Span>
        </ShortLink>
      </Container>
    </>
  );
}
