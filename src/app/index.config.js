export function config ($translateProvider) {
  'ngInject';

  $translateProvider.useStaticFilesLoader({
    prefix: '/assets/i18n/',
    suffix: '.json' + '?t=' + getStamp()
  });

  $translateProvider.preferredLanguage('ZH');
}

function getStamp() {
  var d = new Date(),
    m_str = '0' + (d.getMonth() + 1),
    d_str = '0' + (d.getDate() + 1);

  m_str = m_str.substr(m_str.length - 2, 2);
  d_str = d_str.substr(d_str.length - 2, 2);

  return d.getFullYear() + m_str + d_str;
}
