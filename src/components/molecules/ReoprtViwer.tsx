export const viewReportFromServer = (reportUrl: string | URL) => {
    const urlWithCredentials = new URL(reportUrl instanceof URL ? reportUrl.href : reportUrl)
    urlWithCredentials.username =  'SSRSViewer'
    urlWithCredentials.password = 'SSRS#32'
    
    console.log('Report Url:', reportUrl)
    window.open(urlWithCredentials.href, '_blank', 'noopener,noreferrer')
  }