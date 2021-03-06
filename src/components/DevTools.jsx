import React from 'react';
import { connect } from 'react-redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-y" changePositionKey="ctrl-i">
		<LogMonitor theme="tomorrow" />
	</DockMonitor>
);

export default DevTools;
