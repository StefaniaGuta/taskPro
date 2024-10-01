const LABEL_ARR=[{ id: 0, priority: 'low', color: 'blue' },
{ id: 1, priority: 'medium', color: 'pink' },
{ id: 2, priority: 'high', color: 'green' },
{ id: 3, priority: 'without priority', color: 'gray' },
];

const determineLabelColor = priority => {
    const obj = LABEL_ARR.find(el => el.priority === priority);
    return obj.color;
  };
  
  export default determineLabelColor;