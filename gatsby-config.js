module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        
        spreadsheetId: "1KsaQLT3pp77yEQYeptOIWVmNWmGvxxADlRHrsysF5c8",
        typePrefix: "GoogleSpreadsheet",
        credentials : {
          "type": "service_account",
          "project_id": "qciitd-1605238983650",
          "private_key_id": "b41eb9e6621faacfc12f4043c9f16809b156b5fe",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJQfuLjF7VheN8\n4kPnIduV+Pmnnyo2cGQ2bdNjru/XwQA6VdRpwRlbaZZXDGA91t/W7YEiwN6dJUf3\nFc21Tzq/8EZ8++NhNLjn7c0DJXAtmD+6bmcTLWpBMxHWsOxBnDhHRRne+aH3v+YF\n1aqmEYsZE7vrmSgkiAUUWtPZ0CXCyjMvgyVSpQCzZA/uIpKOpHWJZ951DfvWlWxx\nh5csR2/M1OddrM0jb8q1aApvTMp9Tj/ZF/gY1c/Eer7ia80daHlOuqht6AoF8NIE\nbZ6BXjYT18hqsDf74YaRSjk3P9b3KcB3Lba2tWUoJf+4VrXtoFvzpmyrvP0SKr/t\ntD8/Krz3AgMBAAECggEALGdZ9AaS7+Jb+DRFzgua0qJ9lp2X5y3x9k5R6vbwZPZo\nsfY46OJZUWFg8bDB1TMA7P821C+gjiRpFdtiKQQjjrCZJL9AgjRrLYS6jFyovO6P\n9Pah2EnXXS5C287qOWmZwyO8WwVR1oMo4ZWsUnqhaXWAqzD9+d1m3YBSqIZzpl+p\nBRN33ZmKYqkwjbS2n8perSj1J7fcx7mxeiZ2qF2nIcvJkNnpYPKjKfjAChN9aSeK\nkLuyEK43Wr2tGcsR9DdPOEOw1yg+basGpSSd1XQLfJMg6nrLdYs4BG2okYK3bUnY\nkzFOLcUOhSVRg5/85PRF4tIEoXrbdYks49qNXX+fFQKBgQDxUQMSqM0f1X2B0bD4\nsflJkR9NuSTGTqw9whYYBuxrjs29WPJCceVnsylu8a+sIoESFUWV6kVC42fZUL0/\nKRxCe5qbv56nwS19EXb5NpVahcArRYqJnL2YaYqA8NiaA7hOJR7FSyQ1DbMScRf6\n6WahDIatoOplfaFhGyTQssJf7QKBgQDVgPnPmN2/a1Cg6k7yfcNbWxKodsYr835U\n1SxGZZLUl1lnkO6W2+zXFlK4OnWnuy1tEmGnJMKZxNffUeOaHwOpaGBywCq1hrIi\nldUfVDAabAtRcnNhA587qdto8Aa2rdLgpW56vqjc2kOAkGaHuixHA/v3UQNH6UuM\nEzNtBmSL8wKBgBOWx/ET0tLqua14IC2QBPR721ar2NhgOoso3jJFHZv9k6XzOnc6\nV6z7VjmzVNdcVa3qHCP3SHgNjbiOXU5rP+gFsJ9EBtUHUXH9oPLKA4W9pcPdeUmC\nd8GPj7a31l1qP+PYD49kciP8YLT2iUPM/o/EPIqLrXtfn2IKmgp2+GBhAoGAZt7K\n/syf43A4nB/pRAt2ilj6R3NbDqg2sXc46v5b3dTCvhTl8IgsuIHH/34jXFrii1A0\n/wzGOsLOZIqXSJYy9HgXKJMQwQASanmZA4xT1RdD6M1lbFQLb/rqfchQ48oi9hyf\ne8LLqAX+Sj7JOBJq7RitWb+N/iMZRHen6psO7SMCgYEAl6LLvpa/m92jYQROnrBE\no4lqIIgX7cRqjNm21dpkWY6gdkWs1KDL2/YkpE9fFzvEyhdne8a9tqX+mNeHZPc7\n511zVMKK9pWbLLRfqI7lnybof/HxcuRdYB8858cGbX6FxO+Vi7UeJYzT0whXpJEk\nalyPw7tqngZjAcvFnWH0DF8=\n-----END PRIVATE KEY-----\n",
          "client_email": "qciitd-user-666@qciitd-1605238983650.iam.gserviceaccount.com",
          "client_id": "111980319016977403257",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/qciitd-user-666%40qciitd-1605238983650.iam.gserviceaccount.com"
        },
        filterNode: () => true,
        mapNode: node => node
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
