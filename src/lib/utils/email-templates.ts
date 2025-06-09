const primaryColor = "#155dfb";
const primaryForegroundColor = "#eff6ff";

export const getVerificationEmailTemplate = (url: string, code: string) => `
<html>
  <body>
    <h2>Sign In</h2>
    <p style="margin-bottom: 10px;">Copy and paste the code below (valid for 20 minutes):</p>
    <p style="margin-bottom: 10px; width: min-content; padding: 15px 10px; border-radius: 10px; background-color: ${primaryColor}; color: ${primaryForegroundColor}">${code}</p>
    <p>Or, sign in by clicking this <a style="color: ${primaryColor};" href="${url}">link</a>.
  </body>
</html>
`;
