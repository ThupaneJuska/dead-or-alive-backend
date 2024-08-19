// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class Auth {
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
    this.serviceName = 'Auth';
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
      instance = new Auth(
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
    //appendnew_flow_Auth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Auth');
    //appendnew_flow_Auth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: Auth');

    this.app['post'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_0amagmwLABZ7tYYB(bh, parentSpanInst);
          //appendnew_next_sd_K5Lq4ShjAsVlTnL6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_K5Lq4ShjAsVlTnL6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/forgot-password`,
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
          bh = await this.sd_qTk50dG9TrrmireO(bh, parentSpanInst);
          //appendnew_next_sd_uxfZT6tUi5arCx0W
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uxfZT6tUi5arCx0W');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/register`,
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
          bh = await this.sd_Vi6Ftg5Mf4eaD6DX(bh, parentSpanInst);
          //appendnew_next_sd_f2dx46Jf4lQfF0ZZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_f2dx46Jf4lQfF0ZZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verify-code`,
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
          bh = await this.sd_DGG4LLEBZeopniH6(bh, parentSpanInst);
          //appendnew_next_sd_IZuw9UqTTIjShIgn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_IZuw9UqTTIjShIgn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.sd_3m3gQTAUd4AMGYnt(bh, parentSpanInst);
          //appendnew_next_sd_vhf1KabLfHaM7GrT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vhf1KabLfHaM7GrT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Auth_HttpIn
  }
  //   service flows_Auth

  async checkIfExist(parentSpanInst, searchObj: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'checkIfExist',
      parentSpanInst
    );
    let bh: any = {
      input: {
        searchObj,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J7XxI4RmRujgJ3nW(bh, parentSpanInst);
      //appendnew_next_checkIfExist
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HQW7MlXCfXknBjYn',
        spanInst,
        'checkIfExist'
      );
    }
  }
  //appendnew_flow_Auth_start

  async sd_J7XxI4RmRujgJ3nW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J7XxI4RmRujgJ3nW',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_PhRLzlckwjzX0TdC',
        bh.input.searchObj.collection,
        bh.input.searchObj.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_J7XxI4RmRujgJ3nW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J7XxI4RmRujgJ3nW',
        spanInst,
        'sd_J7XxI4RmRujgJ3nW'
      );
    }
  }

  async sd_0amagmwLABZ7tYYB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0amagmwLABZ7tYYB',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
        query: { email: bh.input.body.email },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tKewE2bR8nh8JVXp(bh, parentSpanInst);
      //appendnew_next_sd_0amagmwLABZ7tYYB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0amagmwLABZ7tYYB',
        spanInst,
        'sd_0amagmwLABZ7tYYB'
      );
    }
  }

  async sd_tKewE2bR8nh8JVXp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tKewE2bR8nh8JVXp',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5qcKPmS8Ia4Wayao(bh, parentSpanInst);
      //appendnew_next_sd_tKewE2bR8nh8JVXp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tKewE2bR8nh8JVXp',
        spanInst,
        'sd_tKewE2bR8nh8JVXp'
      );
    }
  }

  async sd_5qcKPmS8Ia4Wayao(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5qcKPmS8Ia4Wayao',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1h0mL2FpIeKJzrRT(bh, parentSpanInst);
      } else {
        bh = await this.sd_YmweFNq5Y8KmEPDX(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5qcKPmS8Ia4Wayao',
        spanInst,
        'sd_5qcKPmS8Ia4Wayao'
      );
    }
  }

  async sd_1h0mL2FpIeKJzrRT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1h0mL2FpIeKJzrRT',
      parentSpanInst
    );
    try {
      bh.message = {
        message: 'User not found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GLaqJCskcCVvIO8J(bh, parentSpanInst);
      //appendnew_next_sd_1h0mL2FpIeKJzrRT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1h0mL2FpIeKJzrRT',
        spanInst,
        'sd_1h0mL2FpIeKJzrRT'
      );
    }
  }

  async sd_GLaqJCskcCVvIO8J(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GLaqJCskcCVvIO8J');
    }
  }

  async sd_YmweFNq5Y8KmEPDX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YmweFNq5Y8KmEPDX',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.result = bh.result[0];
      bh.match = await bcrypt.compare(
        bh.input.body.password,
        bh.result.password
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_441grX9nuZchAI92(bh, parentSpanInst);
      //appendnew_next_sd_YmweFNq5Y8KmEPDX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YmweFNq5Y8KmEPDX',
        spanInst,
        'sd_YmweFNq5Y8KmEPDX'
      );
    }
  }

  async sd_441grX9nuZchAI92(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_441grX9nuZchAI92',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sC7lG9D8eBGthwno(bh, parentSpanInst);
      } else {
        bh = await this.sd_9zncwjaXbsRC9YfF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_441grX9nuZchAI92',
        spanInst,
        'sd_441grX9nuZchAI92'
      );
    }
  }

  async sd_sC7lG9D8eBGthwno(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sC7lG9D8eBGthwno',
      parentSpanInst
    );
    try {
      bh.message = {
        message: 'Successfully logged in',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GLaqJCskcCVvIO8J(bh, parentSpanInst);
      //appendnew_next_sd_sC7lG9D8eBGthwno
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sC7lG9D8eBGthwno',
        spanInst,
        'sd_sC7lG9D8eBGthwno'
      );
    }
  }

  async sd_9zncwjaXbsRC9YfF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9zncwjaXbsRC9YfF',
      parentSpanInst
    );
    try {
      bh.message = {
        message: "Password Don't match",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GLaqJCskcCVvIO8J(bh, parentSpanInst);
      //appendnew_next_sd_9zncwjaXbsRC9YfF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9zncwjaXbsRC9YfF',
        spanInst,
        'sd_9zncwjaXbsRC9YfF'
      );
    }
  }

  async sd_qTk50dG9TrrmireO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qTk50dG9TrrmireO',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
        query: { email: bh.input.body.email },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QlBjtbaMdzxSbarv(bh, parentSpanInst);
      //appendnew_next_sd_qTk50dG9TrrmireO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qTk50dG9TrrmireO',
        spanInst,
        'sd_qTk50dG9TrrmireO'
      );
    }
  }

  async sd_QlBjtbaMdzxSbarv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QlBjtbaMdzxSbarv',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HDT4gTptFk2ZgL0P(bh, parentSpanInst);
      //appendnew_next_sd_QlBjtbaMdzxSbarv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QlBjtbaMdzxSbarv',
        spanInst,
        'sd_QlBjtbaMdzxSbarv'
      );
    }
  }

  async sd_HDT4gTptFk2ZgL0P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HDT4gTptFk2ZgL0P',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dFXWIgPCrVegxSdq(bh, parentSpanInst);
      } else {
        bh = await this.sd_ISZ5nXeIG9rRkXnw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HDT4gTptFk2ZgL0P',
        spanInst,
        'sd_HDT4gTptFk2ZgL0P'
      );
    }
  }

  async sd_dFXWIgPCrVegxSdq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dFXWIgPCrVegxSdq',
      parentSpanInst
    );
    try {
      const crypto = require('crypto');
      bh.result = bh.result[0];
      const random4Digit = crypto.randomInt(0, 10000);
      let ran = random4Digit.toString().padStart(4, '0');

      bh.otp = ran;

      bh.payload = {
        to: bh.input.body.email,
        subject: 'Here is your OTP',
        from: 'Dead Or Alive',
        image: `
    <p>${ran}</p>
    <img src="https://static.wikia.nocookie.net/logopedia/images/b/b1/Doa.png/revision/latest?cb=20140212160623" width="300px" height="80px"/>`,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_N7IlzKvdFknHwlai(bh, parentSpanInst);
      //appendnew_next_sd_dFXWIgPCrVegxSdq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dFXWIgPCrVegxSdq',
        spanInst,
        'sd_dFXWIgPCrVegxSdq'
      );
    }
  }

  async sd_N7IlzKvdFknHwlai(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N7IlzKvdFknHwlai',
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
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.image,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RSgQQDVvpt3nZ4Uz(bh, parentSpanInst);
      //appendnew_next_sd_N7IlzKvdFknHwlai
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N7IlzKvdFknHwlai',
        spanInst,
        'sd_N7IlzKvdFknHwlai'
      );
    }
  }

  async sd_RSgQQDVvpt3nZ4Uz(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RSgQQDVvpt3nZ4Uz');
    }
  }

  async sd_ISZ5nXeIG9rRkXnw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ISZ5nXeIG9rRkXnw',
      parentSpanInst
    );
    try {
      bh.result = {
        message: "User doesn't exist",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RSgQQDVvpt3nZ4Uz(bh, parentSpanInst);
      //appendnew_next_sd_ISZ5nXeIG9rRkXnw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ISZ5nXeIG9rRkXnw',
        spanInst,
        'sd_ISZ5nXeIG9rRkXnw'
      );
    }
  }

  async sd_Vi6Ftg5Mf4eaD6DX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vi6Ftg5Mf4eaD6DX',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
        query: { email: bh.input.body.email },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VOv8wSN8p5pUYWBS(bh, parentSpanInst);
      //appendnew_next_sd_Vi6Ftg5Mf4eaD6DX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vi6Ftg5Mf4eaD6DX',
        spanInst,
        'sd_Vi6Ftg5Mf4eaD6DX'
      );
    }
  }

  async sd_VOv8wSN8p5pUYWBS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VOv8wSN8p5pUYWBS',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GGIZisd7JaLskPTO(bh, parentSpanInst);
      //appendnew_next_sd_VOv8wSN8p5pUYWBS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VOv8wSN8p5pUYWBS',
        spanInst,
        'sd_VOv8wSN8p5pUYWBS'
      );
    }
  }

  async sd_GGIZisd7JaLskPTO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GGIZisd7JaLskPTO',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_l3VLNTwiRt0hfYhs(bh, parentSpanInst);
      } else {
        bh = await this.sd_RzkdQbrlCEU6tOPd(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GGIZisd7JaLskPTO',
        spanInst,
        'sd_GGIZisd7JaLskPTO'
      );
    }
  }

  async sd_l3VLNTwiRt0hfYhs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l3VLNTwiRt0hfYhs',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NHswfzn47DrTYCyd(bh, parentSpanInst);
      //appendnew_next_sd_l3VLNTwiRt0hfYhs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l3VLNTwiRt0hfYhs',
        spanInst,
        'sd_l3VLNTwiRt0hfYhs'
      );
    }
  }

  async sd_NHswfzn47DrTYCyd(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NHswfzn47DrTYCyd');
    }
  }

  async sd_RzkdQbrlCEU6tOPd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RzkdQbrlCEU6tOPd',
      parentSpanInst
    );
    try {
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9Gv4mFF6jdv5uacF(bh, parentSpanInst);
      //appendnew_next_sd_RzkdQbrlCEU6tOPd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RzkdQbrlCEU6tOPd',
        spanInst,
        'sd_RzkdQbrlCEU6tOPd'
      );
    }
  }

  async sd_9Gv4mFF6jdv5uacF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9Gv4mFF6jdv5uacF',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_PhRLzlckwjzX0TdC',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NHswfzn47DrTYCyd(bh, parentSpanInst);
      //appendnew_next_sd_9Gv4mFF6jdv5uacF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Gv4mFF6jdv5uacF',
        spanInst,
        'sd_9Gv4mFF6jdv5uacF'
      );
    }
  }

  async sd_DGG4LLEBZeopniH6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DGG4LLEBZeopniH6',
      parentSpanInst
    );
    try {
      console.log('Code', bh.OTP);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_DGG4LLEBZeopniH6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DGG4LLEBZeopniH6',
        spanInst,
        'sd_DGG4LLEBZeopniH6'
      );
    }
  }

  async sd_3m3gQTAUd4AMGYnt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3m3gQTAUd4AMGYnt',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.file[0];
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nh6kbwx8AvS2WeI3(bh, parentSpanInst);
      //appendnew_next_sd_3m3gQTAUd4AMGYnt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3m3gQTAUd4AMGYnt',
        spanInst,
        'sd_3m3gQTAUd4AMGYnt'
      );
    }
  }

  async sd_nh6kbwx8AvS2WeI3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nh6kbwx8AvS2WeI3',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_PhRLzlckwjzX0TdC',
        'files',
        bh.file.path,
        bh.file.filename,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MYteWlyo21ynrEtN(bh, parentSpanInst);
      //appendnew_next_sd_nh6kbwx8AvS2WeI3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nh6kbwx8AvS2WeI3',
        spanInst,
        'sd_nh6kbwx8AvS2WeI3'
      );
    }
  }

  async sd_MYteWlyo21ynrEtN(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MYteWlyo21ynrEtN');
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
  //appendnew_flow_Auth_Catch
}
