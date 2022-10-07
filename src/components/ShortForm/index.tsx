/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useState,
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
  H1,
  P,
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
  const [copied, setCopied] = useState<boolean>(false);
  const [data, setData] = useState<ShortAPI>({
    result: {
      code: '',
      full_short_link: '',
      original_link: '',
    },
  });
  const [originalLink, setOriginalLink] = useState<string>('');
  const [responseApi, SetResponseApi] = useState<JSX.Element[]>([
    <ResponseAPi />,
  ]);
  const baseAPI = 'https://api.shrtco.de/v2/shorten?url=';
  let copyLink = false;
  const responseApiMap = useCallback(
    (): JSX.Element[] =>
      responseApi.map(
        (api, index): JSX.Element => <div key={index}>{api}</div>,
      ),
    [responseApi],
  );

  const handleSubmit = async (event?: FormEvent): Promise<void> => {
    event?.preventDefault();
    if (urlParams === '') {
      setError(true);
    }

    await handleAPI();
  };

  const copyShortLink = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopied(true);
      copyLink = true;
      console.log(copyLink);
    } catch (err) {
      copyLink = false;
      setCopied(false);
      console.error(err);
    }
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
          <CopyButton onClick={copyShortLink} error={error} copyLink={copyLink}>
            {copyLink === true ? 'Copied!' : 'Copy'}
            <>{setCopied(false)}</>
          </CopyButton>
        </Span>
      </ShortLink>
    ) : (
      <></>
    );
  }

  const handleKeypress = (event: KeyboardEvent): void => {
    if (event.code === '13') handleSubmit();
  };

  const handleAPI = async (): Promise<void> => {
    try {
      // eslint-disable-next-line no-shadow
      const { data } = await axios.get<ShortAPI>(`${baseAPI}${urlParams}`);
      setData(data);
      setApiCode(data.result.code);
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
  }, [apiCode, copyLink]);

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

        {copied === true ? responseApiMap() : responseApi}
        <H1>Advanced Statistics</H1>
        <P>
          Track how your links are perfoming across the web with our advanced
          statistics dashboard.
        </P>
      </Container>
    </>
  );
}
