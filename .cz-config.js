'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨ feat: new features',
    },
    {
      value: 'fix',
      name: '🐛 fix: fix bug',
    },
    {
      value: 'refactor',
      name: '♻️ refactor: code refactoring (neither new features nor bug changes)',
    },
    {
      value: 'chore',
      name: '🎫 chore: modify process configuration',
    },
    {
      value: 'docs',
      name: '📝 docs: modified document',
    },
    {
      value: 'test',
      name: '✅ test: updated test case',
    },
    {
      value: 'style',
      name: '💄 style: modified style file',
    },
    {
      value: 'perf',
      name: '⚡️ perf: new energy optimization',
    },
    {
      value: 'revert',
      name: '⏪ revert: revert to submit',
    },
  ],
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 50,
  messages: {
    type: 'Please select the type of modification you made this time',
    customScope: '\nPlease clarify the scope of this change (fillable):',
    subject: 'Briefly describe this change:\n',
    body: 'Describe this change in detail (fillable). Use "|" to wrap:\n',
    breaking: 'Please list any BREAKING CHANGES (fillable):\n',
    footer: 'Please list the ISSUE that is closed for this change (fillable). For example: #31, #34:\n',
    confirmCommit: 'Are you sure to submit this change?',
  },
};
