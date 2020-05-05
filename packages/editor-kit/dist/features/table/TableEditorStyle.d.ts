export declare const TableEditorStyle = "\n  .rek-table-wrapper {\n    padding:20px;\n    display:flex;\n    flex-direction:column;\n    padding-right:0;\n  }\n\n  .rek-table-wrapper-body {  \n    position:relative;\n    display:flex;\n    padding-right:16px;\n  }\n\n  .rek-table-right {    \n    position:absolute;\n    right:0;\n    top: -16px;\n    width: 16px;\n    border-top-right-radius: 12px;\n    height: calc(100% + 16px);\n    background-color: var(--gray-light2-color);\n    display:flex;\n    justify-content:center;\n    align-items:center;    \n    cursor:pointer;\n    * {\n      display:none;\n      font-size:16px;\n      width:18px;\n      height:18px;\n      color:var(--button-color);\n    }\n    &:hover {\n      background-color: var(--focus-color);\n      * {\n        display:initial;\n      }\n    }    \n  }\n  .rek-table-bottom {\n    height: 16px;\n    width: calc(100% + 16px);\n    margin-left: -16px;\n    background-color: var(--gray-light2-color);\n    border-bottom-right-radius: 12px;\n    border-bottom-left-radius: 12px;\n    display:flex;\n    justify-content:center;\n    align-items:center;    \n    cursor:pointer;\n    * {\n      display:none;\n      font-size:16px;\n      width:18px;\n      height:18px;\n      color:var(--button-color);\n    }\n    &:hover {\n      background-color: var(--focus-color);\n      * {\n        display:initial;\n      }\n    }    \n  }\n\n  .rek-table-button {\n    position: absolute;\n    left:-17px;\n    top:-17px;\n    width:16px;\n    height:16px;\n    background-color: var(--gray-light2-color);   \n    border-top-left-radius: 12px;\n    .active,\n    &:hover {\n      background-color: var(--focus-color);\n    }\n    cursor:pointer;\n  }\n\n  .rek-table-row-button {\n    width: 16px;\n    height: 100%;\n    top: 0;\n    left: -17px;\n    position: absolute;\n    background-color: var(--gray-light2-color);    \n    .active,\n    &:hover {\n      background-color: var(--focus-color);\n    }\n    cursor:pointer;\n  }\n\n  .rek-table-column-button {\n    width: 100%;\n    height: 16px;\n    top: -17px;\n    left: 0;\n    position: absolute;\n    background-color: var(--gray-light2-color);    \n    .active,\n    &:hover {\n      background-color: var(--focus-color);\n    }\n    cursor:pointer;\n  }\n\n  .rek-table-column-insert {\n    width: 1px;\n    height: 28px;\n    top: -28px;\n    right: -1px;\n    position: absolute;\n    display:flex;\n    justify-content:center;\n  }\n\n  .rek-table-column-insert-button {\n    display:flex;\n    justify-content:center;\n    align-items: center;\n    width: 16px;\n    height: 16px;\n    flex-shrink:0; \n    cursor:pointer; \n    &:hover {\n      .rek-table-column-insert-button-inner {\n        width: 20px;\n        height: 20px;\n        top:-10px;\n        * {\n          display:block;          \n        }\n      }\n    }\n    .rek-table-column-insert-button-inner {\n      position:absolute;\n      top:0;\n      width: 3px;\n      height: 3px;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      flex-shrink:0;\n      background-color: var(--divider-color);\n      border-radius:50%;\n      * {\n        display:none;\n      }\n    }\n  }\n\n  .rek-table-column-insert-divider {\n    width: 1px;\n    height: 16px;\n    bottom: 1px;\n    position: absolute;\n    background-color: var(--divider-color);\n  }\n\n  .rek-table-row-insert {\n    width: 28px;\n    height: 1px;\n    left: -28px;\n    bottom: -1px;\n    position: absolute;\n    display:flex;\n    align-items:center;\n  }\n\n  .rek-table-row-insert-button {\n    display:flex;\n    align-items:center;\n    width: 16px;\n    height: 16px;\n    flex-shrink:0; \n    cursor:pointer; \n\n    &:hover {\n      .rek-table-row-insert-button-inner {\n        width: 20px;\n        height: 20px;\n        top:-10px;\n        left:-10px;\n        * {\n          display:block;\n        }\n      }\n    }\n\n    .rek-table-row-insert-button-inner {\n      position:absolute;\n      top:0;\n      width: 3px;\n      height: 3px;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      flex-shrink:0;\n      background-color: var(--divider-color);\n      border-radius:50%;\n      * {\n        display:none;\n      }\n    }\n  }\n\n  .rek-table-row-insert-divider {\n    height: 1px;\n    width: 16px;\n    right: 1px;\n    position: absolute;\n    background-color: var(--divider-color);\n  }\n\n  .rek-table {\n    width:100%;\n    margin:0 auto;  \n    table-layout: fixed;\n    border-collapse: collapse;\n    border: 1px solid var(--divider-color);\n    :focus {\n      outline:none;\n    }\n  }\n            \n  .rek-tr {\n    border: 1px solid var(--divider-color);\n    position:relative;\n  }\n\n  .rek-header-row .rek-tr:first-child {\n    background-color: #f3f5f7;\n  }\n\n  .rek-header-column .rek-td:first-child {\n    background-color: #f3f5f7;\n  }\n\n  .rek-table.rek-borderless,\n  .rek-table.rek-borderless tr,\n  .rek-table.rek-borderless td {\n    border-color: transparent;\n  }\n\n  .rek-td {\n    position:relative;          \n    border: 1px solid var(--divider-color);\n    padding:4px 8px;\n    padding-right: 24px;\n    height:40px;\n    width:2%;\n    p {\n      margin:0;\n    }              \n  } \n";