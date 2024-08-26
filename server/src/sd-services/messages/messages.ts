// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { EmailOutService } from '../../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class messages {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'messages';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new messages(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_messages_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: messages');
    //appendnew_flow_messages_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: messages');

    this.app['post'](
      `${this.serviceBasePath}/send-message`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_JzXvMCJ9u5fGqI1b(bh, parentSpanInst);
          //appendnew_next_sd_EcmqojPA9tXlB6mc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EcmqojPA9tXlB6mc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-messages`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_BmpStsMzQUqJroBI(bh, parentSpanInst);
          //appendnew_next_sd_skM3KglZayS3WOl9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_skM3KglZayS3WOl9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete-message/:_id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_5CocpaIi45WHSQ6r(bh, parentSpanInst);
          //appendnew_next_sd_hF7x1k9mT5EfXn9e
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hF7x1k9mT5EfXn9e');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-message/:_id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_SLAnyiLt0gnE0mZx(bh, parentSpanInst);
          //appendnew_next_sd_2YglAfLNVMgZZbro
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2YglAfLNVMgZZbro');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_messages_HttpIn
  }
  //   service flows_messages

  //appendnew_flow_messages_start

  async sd_JzXvMCJ9u5fGqI1b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JzXvMCJ9u5fGqI1b',
      parentSpanInst
    );
    try {
      bh.input.body['_id'] = new Date().getTime().toString();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3Xp8ZsvyERJHB3rN(bh, parentSpanInst);
      //appendnew_next_sd_JzXvMCJ9u5fGqI1b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JzXvMCJ9u5fGqI1b',
        spanInst,
        'sd_JzXvMCJ9u5fGqI1b'
      );
    }
  }

  async sd_3Xp8ZsvyERJHB3rN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3Xp8ZsvyERJHB3rN',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: bh.input.body.title,
        from: bh.input.body.email,
        ptag: `
    <p> From ${bh.input.body.email} <br> ${bh.input.body.message}</p>
    <img src="https://static.wikia.nocookie.net/logopedia/images/b/b1/Doa.png/revision/latest?cb=20140212160623" width="300px" height="80px"/>`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0KUO13uYUPRJn9CR(bh, parentSpanInst);
      //appendnew_next_sd_3Xp8ZsvyERJHB3rN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Xp8ZsvyERJHB3rN',
        spanInst,
        'sd_3Xp8ZsvyERJHB3rN'
      );
    }
  }

  async sd_0KUO13uYUPRJn9CR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0KUO13uYUPRJn9CR',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_iDQBGLLAH9RTJrO8'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: undefined,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.ptag,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: undefined,
        }
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_06WsiCCkJWF4Fz8c(bh, parentSpanInst);
      //appendnew_next_sd_0KUO13uYUPRJn9CR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0KUO13uYUPRJn9CR',
        spanInst,
        'sd_0KUO13uYUPRJn9CR'
      );
    }
  }

  async sd_06WsiCCkJWF4Fz8c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_06WsiCCkJWF4Fz8c',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_PhRLzlckwjzX0TdC',
        'messages',
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_aARdHUS71BnEyope(bh, parentSpanInst);
      //appendnew_next_sd_06WsiCCkJWF4Fz8c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_06WsiCCkJWF4Fz8c',
        spanInst,
        'sd_06WsiCCkJWF4Fz8c'
      );
    }
  }

  async sd_aARdHUS71BnEyope(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aARdHUS71BnEyope');
    }
  }

  async sd_BmpStsMzQUqJroBI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BmpStsMzQUqJroBI',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_PhRLzlckwjzX0TdC',
        'messages',
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oRW1jiXJwTk8rRxu(bh, parentSpanInst);
      //appendnew_next_sd_BmpStsMzQUqJroBI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BmpStsMzQUqJroBI',
        spanInst,
        'sd_BmpStsMzQUqJroBI'
      );
    }
  }

  async sd_oRW1jiXJwTk8rRxu(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oRW1jiXJwTk8rRxu');
    }
  }

  async sd_5CocpaIi45WHSQ6r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5CocpaIi45WHSQ6r',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().deleteOne(
        'sd_PhRLzlckwjzX0TdC',
        'messages',
        bh.input.params,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dihuyPOWbDTFrQIs(bh, parentSpanInst);
      //appendnew_next_sd_5CocpaIi45WHSQ6r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5CocpaIi45WHSQ6r',
        spanInst,
        'sd_5CocpaIi45WHSQ6r'
      );
    }
  }

  async sd_dihuyPOWbDTFrQIs(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dihuyPOWbDTFrQIs');
    }
  }

  async sd_SLAnyiLt0gnE0mZx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SLAnyiLt0gnE0mZx',
      parentSpanInst
    );
    try {
      const dataToUpdate = { ...bh.input.body };
      delete dataToUpdate._id;
      bh.filter = { _id: bh.input.params._id };
      bh.body = { $set: dataToUpdate };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7Z3Wg1MSocck2lyu(bh, parentSpanInst);
      //appendnew_next_sd_SLAnyiLt0gnE0mZx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SLAnyiLt0gnE0mZx',
        spanInst,
        'sd_SLAnyiLt0gnE0mZx'
      );
    }
  }

  async sd_7Z3Wg1MSocck2lyu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7Z3Wg1MSocck2lyu',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().updateOne(
        'sd_PhRLzlckwjzX0TdC',
        'messages',
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wc9HFSyLHjQYVXkz(bh, parentSpanInst);
      //appendnew_next_sd_7Z3Wg1MSocck2lyu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7Z3Wg1MSocck2lyu',
        spanInst,
        'sd_7Z3Wg1MSocck2lyu'
      );
    }
  }

  async sd_wc9HFSyLHjQYVXkz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wc9HFSyLHjQYVXkz');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_messages_Catch
}
