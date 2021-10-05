// Types
import * as types from './types';

// Show
export const showFeedbackDialog = () => ({
  type: types.SHOW_FEEDBACK_DIALOG,
});

export const showTagDialog = (pageId) => ({
  type: types.SHOW_TAG_DIALOG,
  payload: pageId,
});

export const showAlertDialog = (query = '') => ({
  type: types.SHOW_ALERT_DIALOG,
  payload: query,
});

export const showPromptDialog = () => ({
  type: types.SHOW_PROMPT_DIALOG,
});

// Hide
export const hideFeedbackDialog = () => ({
  type: types.HIDE_FEEDBACK_DIALOG,
});

export const hideTagDialog = () => ({
  type: types.HIDE_TAG_DIALOG,
});

export const hideAlertDialog = () => ({
  type: types.HIDE_ALERT_DIALOG,
});

export const hidePromptDialog = () => ({
  type: types.HIDE_PROMPT_DIALOG,
});

// Reset
export const reset = () => ({
  type: types.RESET,
});
