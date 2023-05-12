/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import axios from 'axios';

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import Links from '../Links';

// Local imports
import {
  Form,
  InputBox,
  SubmitButton,
  Span,
  Container,
  Small,
  H1,
  P,
} from './styled';

interface ShortAPI {
  result: {
    code: string;
    full_short_link: string;
    original_link: string;
  };
}

interface IResponse {
  code: string;
  shortLink: string;
  originalLink: string;
  isError: boolean;
}

export default function ShortForm() {
  const [apiResponse, setApiResponse] = useState<IResponse>({
    code: '',
    shortLink: '',
    originalLink: '',
    isError: false,
  });
  const [urlParams, setUrlParams] = useState<string>('');
  const [shortedLinks, setShortedLinks] = useState<IResponse[]>(
    JSON.parse(localStorage.getItem('links') || '[]'),
  );
  const $inputRef = useRef<HTMLInputElement | null>(null);
  const baseAPI = 'https://api.shrtco.de/v2/shorten?url=';

  const handleAPI = async (): Promise<void> => {
    try {
      const { data } = await axios.get<ShortAPI>(`${baseAPI}${urlParams}`);
      setApiResponse(() => ({
        code: data.result.code,
        originalLink: data.result.original_link,
        shortLink: data.result.full_short_link,
        isError: false,
      }));
    } catch (err) {
      setApiResponse({ ...apiResponse, isError: true });
    }
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (urlParams.length === 0) {
      setApiResponse({ ...apiResponse, isError: true });
      return;
    }
    try {
      await handleAPI();
      if ($inputRef.current) {
        $inputRef.current.value = '';
        $inputRef.current.focus();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const linksMap: JSX.Element[] = shortedLinks.map(
    (item: IResponse): JSX.Element => {
      return (
        <Links
          key={crypto.randomUUID()}
          originalLink={item.originalLink}
          shortLink={item.shortLink}
        />
      );
    },
  );

  useEffect(() => {
    if (apiResponse.code) {
      setShortedLinks((s) => {
        return [...s, apiResponse];
      });
    }
  }, [apiResponse]);

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(shortedLinks));
  }, [shortedLinks]);
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Span error={apiResponse.isError}>
          <InputBox
            autoFocus
            type="url"
            ref={$inputRef}
            placeholder="Shorten a link here..."
            title="Shorten a link here..."
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUrlParams(e.target.value);
            }}
            error={apiResponse.isError}
            required
          />
          <SubmitButton type="submit">Shorten It!</SubmitButton>
          <Small>{apiResponse.isError ? 'Please add a link' : ''}</Small>
        </Span>
      </Form>
      {linksMap}
      <H1>Advanced Statistics</H1>
      <P>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </P>
    </Container>
  );
}
