import {
  ContextMenuItemType,
  ConversationTypeData,
  SettingsItemType,
  UserSidebarItemType,
} from './types';

export const chatTypes: ConversationTypeData[] = [
  {
    type: 'private',
    label: 'Private',
  },
  {
    type: 'group',
    label: 'Group',
  },
];

export const userContextMenuItems: ContextMenuItemType[] = [
  {
    label: 'Kick User',
    action: 'kick',
    color: '#ff0000',
    ownerOnly: true,
  },
  {
    label: 'Transfer Owner',
    action: 'transfer_owner',
    color: '#FFB800',
    ownerOnly: true,
  },
  {
    label: 'Profile',
    action: 'profile',
    color: '#7c7c7c',
    ownerOnly: false,
  },
];

export const friendsNavbarItems = [
  {
    id: 'friends',
    label: 'Friends',
    pathname: '/messages/friends',
  },
  {
    id: 'requests',
    label: 'Requests',
    pathname: '/messages/friends/requests',
  },
  {
    id: 'blocked',
    label: 'Blocked',
    pathname: '/messages/friends/blocked',
  },
];

export const userSidebarItems: UserSidebarItemType[] = [
  {
    id: 'conversations',
    pathname: '/messages/conversations',
  },
  {
    id: 'friends',
    pathname: '/messages/friends',
  },
  {
    id: 'connections',
    pathname: '/messages/connections',
  },
  {
    id: 'settings',
    pathname: '/messages/settings',
  },
  {
    id: 'calls',
    pathname: '/messages/calls',
  },
];

export const settingsItems: SettingsItemType[] = [
  {
    id: 'profile',
    label: 'Profile',
    pathname: '/messages/settings/profile',
  },
  {
    id: 'security',
    label: 'Security',
    pathname: '/messages/settings/security',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    pathname: '/messages/settings/notifications',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    pathname: '/messages/settings/integrations',
  },
  {
    id: 'appearance',
    label: 'Appearance',
    pathname: '/messages/settings/appearance',
  },
];

export enum CDN_URL {
  BASE = 'https://chuachat.ams3.cdn.digitaloceanspaces.com/',
  ORIGINAL = 'https://chuachat.ams3.cdn.digitaloceanspaces.com/original/',
  PREVIEW = 'https://chuachat.ams3.digitaloceanspaces.com/preview/',
}

export enum SenderEvents {
  VIDEO_CALL_INITIATE = 'onVideoCallInitiate',
  VIDEO_CALL_ACCEPT = 'videoCallAccepted',
  VOICE_CALL_INITIATE = 'onVoiceCallInitiate',
  VOICE_CALL_ACCEPT = 'onVoiceCallAccepted',
}

export enum ReceiverEvents {
  VOICE_CALL = 'onVoiceCall',
}

export enum WebsocketEvents {
  VOICE_CALL_ACCEPTED = 'onVoiceCallAccepted',
  VOICE_CALL_HANG_UP = 'onVoiceCallHangUp',
  VOICE_CALL_REJECTED = 'onVoiceCallRejected',
  VIDEO_CALL_REJECTED = 'onVideoCallRejected',
}
