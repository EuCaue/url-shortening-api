/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

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

  const [urlParams, setUrlParams] = useState<string>('');
  const [shortLink, setShortLink] = useState<string>('');
  const [apiCode, setApiCode] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ShortAPI>({
    result: {
      code: '',
      full_short_link: '',
      original_link: '',
    },
  });
  const [originalLink, setOriginalLink] = useState<string>('');
  const [control, setControl] = useState<boolean>(false);
  const [responseApi, SetResponseApi] = useState<JSX.Element[]>([
    <ResponseAPi />,
  ]);
  const baseAPI = 'https://api.shrtco.de/v2/shorten?url=';

  const responseApiMap = useCallback(
    (): JSX.Element[] =>
      responseApi.map(
        (api, index): JSX.Element => <div key={index}>{api}</div>,
      ),
    [responseApi],
  );

  const handleSubmit = async (event?: FormEvent): Promise<void> => {
    event?.preventDefault();
    console.log('HandleSubmit');
    if (urlParams === '') {
      // setControl(false);
      setError(true);
    }

    await handleAPI();
  };

  function ResponseAPi(): JSX.Element {
    return apiCode ? (
      <ShortLink>
        <OriginalLink href={originalLink} target="_blank">
          {originalLink}
        </OriginalLink>
        <Span error={error}>
          <ShortenLink href={shortLink} target="_blank">
            {shortLink}
          </ShortenLink>
          <CopyButton error={error}>Copy</CopyButton>
        </Span>
      </ShortLink>
    ) : (
      <></>
    );
  }

  const handleKeypress = (event: KeyboardEvent): void => {
    if (event.code === '13') {
      handleSubmit();
      // setControl(true);
    }
  };

  const handleAPI = async (): Promise<void> => {
    try {
      // eslint-disable-next-line no-shadow
      const { data } = await axios.get<ShortAPI>(`${baseAPI}${urlParams}`);
      setData(data);
      console.log('handleApi');
      setControl(false);
      setApiCode(data.result.code);
      console.log(data.result.code);
      setOriginalLink(data.result.original_link);
      setShortLink(data.result.full_short_link);
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err, 'handleSubmit Catch err');
    }
  };

  useEffect(() => {
    if (apiCode) {
      handleSubmit();
      SetResponseApi(() => [<ResponseAPi />, ...responseApi]);
    }
  }, [apiCode]);

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Span error={error}>
            <InputBox
              placeholder="Shorten a link here..."
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUrlParams(e.target.value);
              }}
              error={error}
            />

            <SubmitButton
              type="submit"
              error={error}
              onKeyPress={(e): void => handleKeypress(e)}
            >
              Shorten It!
            </SubmitButton>

            <Small error={error}>{error ? 'Please add a link' : ''}</Small>
          </Span>
        </Form>

        {responseApiMap()}
      </Container>
    </>
  );
}
