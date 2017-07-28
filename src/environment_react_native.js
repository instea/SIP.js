"use strict";
var WebRTC = require('react-native-webrtc');
var BackgroundTimer = require('react-native-background-timer').default;

var toplevel = global.window || global;

module.exports = {
  WebSocket: toplevel.WebSocket,
  Transport: require('./Transport'),
  Promise: toplevel.Promise,
  timers: { // global RN timers cannot be run in background
    'setTimeout': BackgroundTimer.setTimeout.bind(BackgroundTimer),
    'clearTimeout': BackgroundTimer.clearTimeout.bind(BackgroundTimer),
    'setInterval': BackgroundTimer.setInterval.bind(BackgroundTimer),
    'clearInterval': BackgroundTimer.clearInterval.bind(BackgroundTimer)
  },

  console: toplevel.console,

  MediaStream: WebRTC.MediaStream,
  getUserMedia: WebRTC.getUserMedia,
  RTCPeerConnection: WebRTC.RTCPeerConnection,
  RTCSessionDescription: WebRTC.RTCSessionDescription,

  // browser specific, not needed for RN
  open: null,
  addEventListener: null,
  removeEventListener: null,
  HTMLMediaElement: null,
  attachMediaStream: null,
  createObjectURL: null,
  revokeObjectURL: null
};
