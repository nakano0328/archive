import { Metadata } from 'next'
import RainbowText from './RainbowText';

export const metadata: Metadata = {
  title: 'hayakawa',
}

export default function Page() {
  return (
    <div>
      <RainbowText />
      <div style={{ textAlign: 'center' }}>
        <p>
          ぼくのかんがえたさいきょうのぺーじ！
        </p>
      </div>
    </div>
  );
}
