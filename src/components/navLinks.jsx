import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Popup } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
const NavLinks = () => {
  const { t } = useTranslation('translation');
  return (
    <div style={{ margin: '2rem' }}>
      <Button size="huge" as={Link} to="/apa" content="APA" />
      <Popup
        trigger={<Button size="huge" as={Link} to="/" content="MLA" />}
        content={t('translation:availableSoon', 'Available soon!')}
        position="top center"
      />
    </div>
  );
};

export default NavLinks;
