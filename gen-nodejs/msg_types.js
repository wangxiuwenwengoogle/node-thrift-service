//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
Base = module.exports.Base = function(args) {
  this.id = null;
  this.sender = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
    if (args.sender !== undefined && args.sender !== null) {
      this.sender = args.sender;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field sender is unset!');
    }
  }
};
Base.prototype = {};
Base.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.sender = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Base.prototype.write = function(output) {
  output.writeStructBegin('Base');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.sender !== null && this.sender !== undefined) {
    output.writeFieldBegin('sender', Thrift.Type.STRING, 2);
    output.writeString(this.sender);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Call = module.exports.Call = function(args) {
  this.name = null;
  this.action = null;
  this.params = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field name is unset!');
    }
    if (args.action !== undefined && args.action !== null) {
      this.action = args.action;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field action is unset!');
    }
    if (args.params !== undefined && args.params !== null) {
      this.params = args.params;
    }
  }
};
Call.prototype = {};
Call.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.action = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.params = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Call.prototype.write = function(output) {
  output.writeStructBegin('Call');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.action !== null && this.action !== undefined) {
    output.writeFieldBegin('action', Thrift.Type.STRING, 2);
    output.writeString(this.action);
    output.writeFieldEnd();
  }
  if (this.params !== null && this.params !== undefined) {
    output.writeFieldBegin('params', Thrift.Type.STRING, 3);
    output.writeString(this.params);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CMsg = module.exports.CMsg = function(args) {
  this.base = null;
  this.call = null;
  if (args) {
    if (args.base !== undefined && args.base !== null) {
      this.base = new ttypes.Base(args.base);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field base is unset!');
    }
    if (args.call !== undefined && args.call !== null) {
      this.call = new ttypes.Call(args.call);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field call is unset!');
    }
  }
};
CMsg.prototype = {};
CMsg.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.base = new ttypes.Base();
        this.base.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.call = new ttypes.Call();
        this.call.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CMsg.prototype.write = function(output) {
  output.writeStructBegin('CMsg');
  if (this.base !== null && this.base !== undefined) {
    output.writeFieldBegin('base', Thrift.Type.STRUCT, 1);
    this.base.write(output);
    output.writeFieldEnd();
  }
  if (this.call !== null && this.call !== undefined) {
    output.writeFieldBegin('call', Thrift.Type.STRUCT, 2);
    this.call.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

RMsg = module.exports.RMsg = function(args) {
  this.base = null;
  this.res = null;
  if (args) {
    if (args.base !== undefined && args.base !== null) {
      this.base = new ttypes.Base(args.base);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field base is unset!');
    }
    if (args.res !== undefined && args.res !== null) {
      this.res = args.res;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field res is unset!');
    }
  }
};
RMsg.prototype = {};
RMsg.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.base = new ttypes.Base();
        this.base.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.res = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RMsg.prototype.write = function(output) {
  output.writeStructBegin('RMsg');
  if (this.base !== null && this.base !== undefined) {
    output.writeFieldBegin('base', Thrift.Type.STRUCT, 1);
    this.base.write(output);
    output.writeFieldEnd();
  }
  if (this.res !== null && this.res !== undefined) {
    output.writeFieldBegin('res', Thrift.Type.STRING, 2);
    output.writeString(this.res);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ThriftCallingException = module.exports.ThriftCallingException = function(args) {
  Thrift.TException.call(this, "ThriftCallingException")
  this.name = "ThriftCallingException"
  this.err = null;
  this.message = null;
  if (args) {
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field err is unset!');
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(ThriftCallingException, Thrift.TException);
ThriftCallingException.prototype.name = 'ThriftCallingException';
ThriftCallingException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.err = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftCallingException.prototype.write = function(output) {
  output.writeStructBegin('ThriftCallingException');
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRING, 1);
    output.writeString(this.err);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

