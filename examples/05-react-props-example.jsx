// @flow
import * as React from 'react';

type Props = {| title: string, count: number |};

function Banner(p: Props) {
  return <div>{p.title} — {p.count}</div>;
}

<Banner title="X" count={3} colour="red" />;
