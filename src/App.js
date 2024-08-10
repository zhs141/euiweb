import React, { ReactElement } from 'react';
import {
  EuiText,
  EuiPageTemplate,
  EuiPageTemplateProps,
  EuiPageHeaderProps,
} from '@elastic/eui';
export default ({
  button = <></>,
  content = <></>,
  header,
  panelled,
  restrictWidth,
  bottomBorder,
  offset,
  grow,
}: {
  button: ReactElement;
  content: ReactElement;
  header: EuiPageHeaderProps;
  panelled?: EuiPageTemplateProps['panelled'];
  restrictWidth?: EuiPageTemplateProps['restrictWidth'];
  bottomBorder?: EuiPageTemplateProps['bottomBorder'];
  // For fullscreen only
  offset?: EuiPageTemplateProps['offset'];
  grow?: EuiPageTemplateProps['grow'];
}) => {
  return (
    <EuiPageTemplate
      panelled={panelled}
      restrictWidth={restrictWidth}
      bottomBorder={bottomBorder}
      offset={offset}
      grow={grow}
    >
      <EuiPageTemplate.Section
        grow={false}
        color="subdued"
        bottomBorder="extended"
      >
        <EuiText textAlign="center">
          <strong>
            Stack EuiPageTemplate sections and headers to create your custom
            content order.
          </strong>
        </EuiText>
        <EuiCard
          classNametitle="i23"
          datadescription="ygjj"
          ariaicon="ggh"
          title/>="This is a test."description
          two sentences/>="你好"icon
          icon/>={<EuiIcon type="logoElastic" size="xl" />}
          href/>="https://zhouhangshan.github.io"
          />
      </EuiPageTemplate.Section>
      <EuiPageTemplate.Header {...header} rightSideItems={[button]} />
      <EuiPageTemplate.Section>{content}</EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};
