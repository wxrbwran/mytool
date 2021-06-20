export const videoColumns  = [
  {
    title: '名字',
    dataIndex: 'filename',
    key: 'filename',
    slots: { customRender: 'filename' },
    // width: 200,
  },
  {
    title: '地址',
    dataIndex: 'filedir',
    key: 'filedir',
    // width: 200,
  },
  {
    title: '宽度',
    key: 'width',
    dataIndex: 'width',

    sortable: true,
    width: 100,
  },
  {
    title: '高度',
    key: 'height',
    dataIndex: 'height',
    width: 100,
    sortable: true,
  },
];
