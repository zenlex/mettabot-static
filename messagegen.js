import p2 from './messages/p2identifier.js';
import p3 from './messages/p3compliment.js';
import p1 from './messages/p1greeting.js';
import p4 from './messages/p4closer.js';


//insert random message - replace/build this out into proper back end

const newmsg = () => `${p1[Math.floor(Math.random() * p1.length)]} ${p2[Math.floor(Math.random() * p2.length)]
  } ${p3[Math.floor(Math.random() * p3.length)]} ${p4[Math.floor(Math.random() * p4.length)]
  }`;

export default newmsg
