import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  SpanCopyLink,
  ShortLink,
  ShortenLink,
  CopyButton,
  OriginalLink,
} from './styled';

export default function Links({
  originalLink,
  shortLink,
}: {
  originalLink: string;
  shortLink: string;
}): JSX.Element {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <ShortLink>
      <OriginalLink
        href={originalLink}
        target="_blank"
        title={originalLink}
      >
        {originalLink}
      </OriginalLink>

      <SpanCopyLink>
        <ShortenLink
          href={shortLink}
          target="_blank"
          title={shortLink}
        >
          {shortLink}
        </ShortenLink>

        <CopyToClipboard text={shortLink}>
          <CopyButton
            title={
              copied
                ? 'Link already copied, click again to copy again!'
                : 'Click Here to copy link'
            }
            onClick={() => {
              setCopied(true);
            }}
            copyLink={copied}
          >
            {copied ? 'Copied!' : 'Copy'}
          </CopyButton>
        </CopyToClipboard>
      </SpanCopyLink>
    </ShortLink>
  );
}
