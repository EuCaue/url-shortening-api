/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { FormEvent, KeyboardEvent, useState } from 'react';

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
  Small,
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
  const [apiCode, setApiCode] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [originalLink, setOriginalLink] = useState<string>();
  const [control, setControl] = useState<boolean>(false);
  const [responseApi, SetResponseApi] = useState<JSX.Element[]>([
    <ResponseAPi />,
  ]);
  const baseAPI = 'https://api.shrtco.de/v2/shorten?url=';

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      const { data } = await axios.get<ShortAPI>(`${baseAPI}${urlParams}`);
      setOriginalLink(data.result.original_link);
      setShortLink(data.result.full_short_link);
      setApiCode(data.result.code);
      setError(false);
      console.log(error);
    } catch (err) {
      console.log(err);
      setError(true);
      console.log(error);
    }
  };
  function ResponseAPi(): JSX.Element {
    return apiCode ? (
      <>
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
      </>
    ) : (
      <></>
    );
  }

  const handleKeypress = (event: KeyboardEvent): void => {
    if (event.code === '13') {
      SetResponseApi([...responseApi, <ResponseAPi />]);
      setControl(true);
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Span error={error}>
            <InputBox
              placeholder="Shorten a link here..."
              onChange={(e) => setUrlParams(e.target.value)}
              error={error}
            />

            {/* <SubmitButton type="submit" onClick={() => setControl(true)}>
              Shorten It!
            </SubmitButton> */}
            <SubmitButton
              type="submit"
              error={error}
              onKeyPress={(e) => handleKeypress(e)}
              onClick={() => {
                try {
                  SetResponseApi([...responseApi, <ResponseAPi />]);
                } catch (err) {
                  console.log(err);
                }
                setControl(true);
                console.log('here');
              }}
            >
              Shorten It!
            </SubmitButton>
            <Small error={error}>{error ? 'Please add a link' : ''}</Small>
          </Span>
        </Form>

        {/* {control ? <ResponseAPi /> : false} */}
        {
          <div>
            {responseApi.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        }
      </Container>
    </>
  );
}
