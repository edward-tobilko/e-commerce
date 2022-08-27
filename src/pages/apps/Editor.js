import React from "react";
import OrdersHeader from "../../components/OrdersHeader";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

const Editor = () => {
  return (
    <div className="apps__container">
      <OrdersHeader category="Editor app" title="Editor" />
      <RichTextEditorComponent>
        <div>
          <h3>
            Try React React has been designed from the start for gradual
            adoption, and you can use as little or as much React as you need.
            Whether you want to get a taste of React, add some interactivity to
            a simple HTML page, or start a complex React-powered app, the links
            in this section will help you get started. Online Playgrounds If
            you’re interested in playing around with React, you can use an
            online code playground. Try a Hello World template on CodePen,
            CodeSandbox, or Stackblitz. If you prefer to use your own text
            editor, you can also download this HTML file, edit it, and open it
            from the local filesystem in your browser. It does a slow runtime
            code transformation, so we’d only recommend using this for simple
            demos. Add React to a Website You can add React to an HTML page in
            one minute.
          </h3>
        </div>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
