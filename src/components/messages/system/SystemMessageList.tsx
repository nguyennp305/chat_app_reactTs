import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { SystemMessage } from './SystemMessage';

export const SystemMessageList = () => {
  const { messages } = useSelector((state: RootState) => state.systemMessages);
  return (
    <div style={{ margin: '6px 60px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {messages.map((message) => (
        <SystemMessage message={message} />
      ))}
    </div>
  );
};
