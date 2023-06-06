// Generated from SQL.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import SQLListener from './SQLListener.js';
const serializedATN = [4,1,51,190,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,4,
0,27,8,0,11,0,12,0,28,1,0,1,0,1,1,1,1,1,2,5,2,36,8,2,10,2,12,2,39,9,2,1,
2,1,2,3,2,43,8,2,1,3,1,3,1,3,1,3,1,3,3,3,50,8,3,1,3,1,3,1,3,1,3,1,3,5,3,
57,8,3,10,3,12,3,60,9,3,1,3,3,3,63,8,3,1,3,1,3,1,4,1,4,3,4,69,8,4,1,5,3,
5,72,8,5,1,5,1,5,1,5,1,5,3,5,78,8,5,1,5,5,5,81,8,5,10,5,12,5,84,9,5,1,5,
1,5,1,6,1,6,1,6,3,6,91,8,6,1,6,3,6,94,8,6,1,6,5,6,97,8,6,10,6,12,6,100,9,
6,1,7,1,7,3,7,104,8,7,1,7,1,7,3,7,108,8,7,1,7,1,7,1,7,1,7,3,7,114,8,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,128,8,7,1,7,1,7,1,7,1,
7,1,7,3,7,135,8,7,1,7,3,7,138,8,7,3,7,140,8,7,1,8,3,8,143,8,8,1,8,1,8,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,156,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,173,8,9,1,10,1,10,1,10,1,10,1,10,1,
10,3,10,181,8,10,1,11,3,11,184,8,11,1,11,1,11,3,11,188,8,11,1,11,2,37,82,
0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,6,1,0,40,41,1,0,6,7,1,0,8,9,1,0,14,
15,2,0,11,11,21,21,1,0,34,35,223,0,26,1,0,0,0,2,32,1,0,0,0,4,42,1,0,0,0,
6,44,1,0,0,0,8,68,1,0,0,0,10,77,1,0,0,0,12,87,1,0,0,0,14,139,1,0,0,0,16,
142,1,0,0,0,18,172,1,0,0,0,20,180,1,0,0,0,22,183,1,0,0,0,24,27,3,2,1,0,25,
27,3,4,2,0,26,24,1,0,0,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,
1,0,0,0,29,30,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,33,3,6,3,0,33,3,1,0,
0,0,34,36,9,0,0,0,35,34,1,0,0,0,36,39,1,0,0,0,37,38,1,0,0,0,37,35,1,0,0,
0,38,40,1,0,0,0,39,37,1,0,0,0,40,43,5,42,0,0,41,43,5,45,0,0,42,37,1,0,0,
0,42,41,1,0,0,0,43,5,1,0,0,0,44,45,5,1,0,0,45,49,5,2,0,0,46,47,5,3,0,0,47,
48,5,4,0,0,48,50,5,5,0,0,49,46,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,51,52,
3,22,11,0,52,53,5,39,0,0,53,58,3,8,4,0,54,55,5,41,0,0,55,57,3,8,4,0,56,54,
1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,62,1,0,0,0,60,58,1,
0,0,0,61,63,5,40,0,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,65,5,42,
0,0,65,7,1,0,0,0,66,69,3,12,6,0,67,69,3,10,5,0,68,66,1,0,0,0,68,67,1,0,0,
0,69,9,1,0,0,0,70,72,5,28,0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,
73,78,5,29,0,0,74,78,5,30,0,0,75,78,5,32,0,0,76,78,5,33,0,0,77,71,1,0,0,
0,77,74,1,0,0,0,77,75,1,0,0,0,77,76,1,0,0,0,78,82,1,0,0,0,79,81,9,0,0,0,
80,79,1,0,0,0,81,84,1,0,0,0,82,83,1,0,0,0,82,80,1,0,0,0,83,85,1,0,0,0,84,
82,1,0,0,0,85,86,7,0,0,0,86,11,1,0,0,0,87,88,3,22,11,0,88,90,3,14,7,0,89,
91,3,18,9,0,90,89,1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,94,3,16,8,0,93,
92,1,0,0,0,93,94,1,0,0,0,94,98,1,0,0,0,95,97,3,20,10,0,96,95,1,0,0,0,97,
100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,13,1,0,0,0,100,98,1,0,0,0,101,
103,7,1,0,0,102,104,5,10,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,140,1,0,
0,0,105,107,7,2,0,0,106,108,5,10,0,0,107,106,1,0,0,0,107,108,1,0,0,0,108,
140,1,0,0,0,109,140,5,13,0,0,110,113,5,19,0,0,111,112,5,20,0,0,112,114,3,
14,7,0,113,111,1,0,0,0,113,114,1,0,0,0,114,140,1,0,0,0,115,116,7,3,0,0,116,
117,5,39,0,0,117,118,5,48,0,0,118,140,5,40,0,0,119,120,5,16,0,0,120,121,
5,39,0,0,121,122,5,48,0,0,122,140,5,40,0,0,123,140,5,22,0,0,124,140,5,17,
0,0,125,127,5,18,0,0,126,128,5,25,0,0,127,126,1,0,0,0,127,128,1,0,0,0,128,
140,1,0,0,0,129,137,7,4,0,0,130,131,5,39,0,0,131,134,5,48,0,0,132,133,5,
41,0,0,133,135,5,48,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,
136,138,5,40,0,0,137,130,1,0,0,0,137,138,1,0,0,0,138,140,1,0,0,0,139,101,
1,0,0,0,139,105,1,0,0,0,139,109,1,0,0,0,139,110,1,0,0,0,139,115,1,0,0,0,
139,119,1,0,0,0,139,123,1,0,0,0,139,124,1,0,0,0,139,125,1,0,0,0,139,129,
1,0,0,0,140,15,1,0,0,0,141,143,5,4,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,
144,1,0,0,0,144,145,5,12,0,0,145,17,1,0,0,0,146,147,5,23,0,0,147,173,5,12,
0,0,148,149,5,23,0,0,149,173,7,5,0,0,150,155,5,23,0,0,151,156,5,24,0,0,152,
153,5,37,0,0,153,154,5,39,0,0,154,156,5,40,0,0,155,151,1,0,0,0,155,152,1,
0,0,0,156,173,1,0,0,0,157,158,5,23,0,0,158,159,5,38,0,0,159,160,5,50,0,0,
160,173,5,38,0,0,161,162,5,23,0,0,162,173,5,48,0,0,163,164,5,23,0,0,164,
173,5,49,0,0,165,166,5,23,0,0,166,167,5,36,0,0,167,168,5,39,0,0,168,169,
5,47,0,0,169,173,5,40,0,0,170,171,5,23,0,0,171,173,5,47,0,0,172,146,1,0,
0,0,172,148,1,0,0,0,172,150,1,0,0,0,172,157,1,0,0,0,172,161,1,0,0,0,172,
163,1,0,0,0,172,165,1,0,0,0,172,170,1,0,0,0,173,19,1,0,0,0,174,175,5,28,
0,0,175,181,5,29,0,0,176,181,5,31,0,0,177,181,5,24,0,0,178,181,5,26,0,0,
179,181,5,27,0,0,180,174,1,0,0,0,180,176,1,0,0,0,180,177,1,0,0,0,180,178,
1,0,0,0,180,179,1,0,0,0,181,21,1,0,0,0,182,184,5,38,0,0,183,182,1,0,0,0,
183,184,1,0,0,0,184,185,1,0,0,0,185,187,5,50,0,0,186,188,5,38,0,0,187,186,
1,0,0,0,187,188,1,0,0,0,188,23,1,0,0,0,27,26,28,37,42,49,58,62,68,71,77,
82,90,93,98,103,107,113,127,134,137,139,142,155,172,180,183,187];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SQLParser extends antlr4.Parser {

    static grammarFileName = "SQL.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "'('", 
                            "')'", "','", "';'", "'='", "'::'" ];
    static symbolicNames = [ null, "CREATE", "TABLE", "IF", "NOT", "EXISTS", 
                             "INTEGER", "INT", "SMALLINT", "TINYINT", "UNSIGNED", 
                             "NUMERIC", "NULL", "TEXT", "VARCHAR", "CHARVAR", 
                             "CHAR", "DATETIME", "TIMESTAMP", "BLOB", "SUBTYPE", 
                             "DECIMAL", "YEAR", "DEFAULT", "CURRENT_TIMESTAMP", 
                             "TIMEZONE", "ON", "UPDATE", "PRIMARY", "KEY", 
                             "CONSTRAINT", "AUTOINCREMENT", "SPECIAL_FEATURES", 
                             "FULLTEXT", "TRUE", "FALSE", "NEXTVAL", "NOW", 
                             "QUOTE", "LPAREN", "RPAREN", "COMMA", "SEMICOLON", 
                             "EQUAL", "DOUBLE_COLON", "COMMENT", "SPACES", 
                             "SPECIAL_STRING", "NUMBER", "REAL", "NAME", 
                             "ANY" ];
    static ruleNames = [ "statements", "statement", "ignore", "createStmt", 
                         "element", "ignorable", "definition", "type", "nullability", 
                         "defaultValue", "attributes", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SQLParser.ruleNames;
        this.literalNames = SQLParser.literalNames;
        this.symbolicNames = SQLParser.symbolicNames;
    }



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SQLParser.RULE_statements);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 24;
	                this.statement();
	                break;

	            case 2:
	                this.state = 25;
	                this.ignore();
	                break;

	            }
	            this.state = 28; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1048575) !== 0));
	        this.state = 30;
	        this.match(SQLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SQLParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.createStmt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ignore() {
	    let localctx = new IgnoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SQLParser.RULE_ignore);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 34;
	                    this.matchWildcard(); 
	                }
	                this.state = 39;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	            }

	            this.state = 40;
	            this.match(SQLParser.SEMICOLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.match(SQLParser.COMMENT);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createStmt() {
	    let localctx = new CreateStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SQLParser.RULE_createStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(SQLParser.CREATE);
	        this.state = 45;
	        this.match(SQLParser.TABLE);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 46;
	            this.match(SQLParser.IF);
	            this.state = 47;
	            this.match(SQLParser.NOT);
	            this.state = 48;
	            this.match(SQLParser.EXISTS);
	        }

	        this.state = 51;
	        localctx.tableName = this.name();
	        this.state = 52;
	        this.match(SQLParser.LPAREN);
	        this.state = 53;
	        this.element();
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===41) {
	            this.state = 54;
	            this.match(SQLParser.COMMA);
	            this.state = 55;
	            this.element();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 61;
	            this.match(SQLParser.RPAREN);
	        }

	        this.state = 64;
	        this.match(SQLParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SQLParser.RULE_element);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.definition();
	            break;
	        case 28:
	        case 29:
	        case 30:
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.ignorable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ignorable() {
	    let localctx = new IgnorableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SQLParser.RULE_ignorable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 29:
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 70;
	                this.match(SQLParser.PRIMARY);
	            }

	            this.state = 73;
	            this.match(SQLParser.KEY);
	            break;
	        case 30:
	            this.state = 74;
	            this.match(SQLParser.CONSTRAINT);
	            break;
	        case 32:
	            this.state = 75;
	            this.match(SQLParser.SPECIAL_FEATURES);
	            break;
	        case 33:
	            this.state = 76;
	            this.match(SQLParser.FULLTEXT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 82;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 79;
	                this.matchWildcard(); 
	            }
	            this.state = 84;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 85;
	        _la = this._input.LA(1);
	        if(!(_la===40 || _la===41)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SQLParser.RULE_definition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.name();
	        this.state = 88;
	        this.type();
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 89;
	            this.defaultValue();
	        }

	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4 || _la===12) {
	            this.state = 92;
	            this.nullability();
	        }

	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2634022912) !== 0)) {
	            this.state = 95;
	            this.attributes();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SQLParser.RULE_type);
	    var _la = 0;
	    try {
	        this.state = 139;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 7:
	            localctx = new IntegerTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 102;
	                this.match(SQLParser.UNSIGNED);
	            }

	            break;
	        case 8:
	        case 9:
	            localctx = new SmallIntegerTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===9)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 106;
	                this.match(SQLParser.UNSIGNED);
	            }

	            break;
	        case 13:
	            localctx = new TextTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.match(SQLParser.TEXT);
	            break;
	        case 19:
	            localctx = new BlobTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 110;
	            this.match(SQLParser.BLOB);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 111;
	                this.match(SQLParser.SUBTYPE);
	                this.state = 112;
	                this.type();
	            }

	            break;
	        case 14:
	        case 15:
	            localctx = new VarcharTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 115;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
	            this.match(SQLParser.LPAREN);
	            this.state = 117;
	            this.match(SQLParser.NUMBER);
	            this.state = 118;
	            this.match(SQLParser.RPAREN);
	            break;
	        case 16:
	            localctx = new CharTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 119;
	            this.match(SQLParser.CHAR);
	            this.state = 120;
	            this.match(SQLParser.LPAREN);
	            this.state = 121;
	            this.match(SQLParser.NUMBER);
	            this.state = 122;
	            this.match(SQLParser.RPAREN);
	            break;
	        case 22:
	            localctx = new YearTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 123;
	            this.match(SQLParser.YEAR);
	            break;
	        case 17:
	            localctx = new DatetimeTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 124;
	            this.match(SQLParser.DATETIME);
	            break;
	        case 18:
	            localctx = new TimestampTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 125;
	            this.match(SQLParser.TIMESTAMP);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 126;
	                this.match(SQLParser.TIMEZONE);
	            }

	            break;
	        case 11:
	        case 21:
	            localctx = new DecimalTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 129;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===21)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 130;
	                this.match(SQLParser.LPAREN);
	                this.state = 131;
	                localctx.precision = this.match(SQLParser.NUMBER);
	                this.state = 134;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 132;
	                    this.match(SQLParser.COMMA);
	                    this.state = 133;
	                    localctx.scale = this.match(SQLParser.NUMBER);
	                }

	                this.state = 136;
	                this.match(SQLParser.RPAREN);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nullability() {
	    let localctx = new NullabilityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SQLParser.RULE_nullability);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 141;
	            this.match(SQLParser.NOT);
	        }

	        this.state = 144;
	        this.match(SQLParser.NULL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defaultValue() {
	    let localctx = new DefaultValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SQLParser.RULE_defaultValue);
	    var _la = 0;
	    try {
	        this.state = 172;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DefaultNullContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.match(SQLParser.DEFAULT);
	            this.state = 147;
	            this.match(SQLParser.NULL);
	            break;

	        case 2:
	            localctx = new DefaultBoolContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.match(SQLParser.DEFAULT);
	            this.state = 149;
	            _la = this._input.LA(1);
	            if(!(_la===34 || _la===35)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 3:
	            localctx = new DefaultTimeContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 150;
	            this.match(SQLParser.DEFAULT);
	            this.state = 155;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 24:
	                this.state = 151;
	                this.match(SQLParser.CURRENT_TIMESTAMP);
	                break;
	            case 37:
	                this.state = 152;
	                this.match(SQLParser.NOW);
	                this.state = 153;
	                this.match(SQLParser.LPAREN);
	                this.state = 154;
	                this.match(SQLParser.RPAREN);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 4:
	            localctx = new DefaultStringContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 157;
	            this.match(SQLParser.DEFAULT);
	            this.state = 158;
	            this.match(SQLParser.QUOTE);
	            this.state = 159;
	            this.match(SQLParser.NAME);
	            this.state = 160;
	            this.match(SQLParser.QUOTE);
	            break;

	        case 5:
	            localctx = new DefaultIntContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
	            this.match(SQLParser.DEFAULT);
	            this.state = 162;
	            this.match(SQLParser.NUMBER);
	            break;

	        case 6:
	            localctx = new DefaultDoubleContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 163;
	            this.match(SQLParser.DEFAULT);
	            this.state = 164;
	            this.match(SQLParser.REAL);
	            break;

	        case 7:
	            localctx = new DefaultNextContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 165;
	            this.match(SQLParser.DEFAULT);
	            this.state = 166;
	            this.match(SQLParser.NEXTVAL);
	            this.state = 167;
	            this.match(SQLParser.LPAREN);
	            this.state = 168;
	            this.match(SQLParser.SPECIAL_STRING);
	            this.state = 169;
	            this.match(SQLParser.RPAREN);
	            break;

	        case 8:
	            localctx = new DefaultSpecialContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 170;
	            this.match(SQLParser.DEFAULT);
	            this.state = 171;
	            this.match(SQLParser.SPECIAL_STRING);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributes() {
	    let localctx = new AttributesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SQLParser.RULE_attributes);
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.match(SQLParser.PRIMARY);
	            this.state = 175;
	            this.match(SQLParser.KEY);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 176;
	            this.match(SQLParser.AUTOINCREMENT);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
	            this.match(SQLParser.CURRENT_TIMESTAMP);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 178;
	            this.match(SQLParser.ON);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 179;
	            this.match(SQLParser.UPDATE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SQLParser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 182;
	            this.match(SQLParser.QUOTE);
	        }

	        this.state = 185;
	        this.match(SQLParser.NAME);
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 186;
	            this.match(SQLParser.QUOTE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SQLParser.EOF = antlr4.Token.EOF;
SQLParser.CREATE = 1;
SQLParser.TABLE = 2;
SQLParser.IF = 3;
SQLParser.NOT = 4;
SQLParser.EXISTS = 5;
SQLParser.INTEGER = 6;
SQLParser.INT = 7;
SQLParser.SMALLINT = 8;
SQLParser.TINYINT = 9;
SQLParser.UNSIGNED = 10;
SQLParser.NUMERIC = 11;
SQLParser.NULL = 12;
SQLParser.TEXT = 13;
SQLParser.VARCHAR = 14;
SQLParser.CHARVAR = 15;
SQLParser.CHAR = 16;
SQLParser.DATETIME = 17;
SQLParser.TIMESTAMP = 18;
SQLParser.BLOB = 19;
SQLParser.SUBTYPE = 20;
SQLParser.DECIMAL = 21;
SQLParser.YEAR = 22;
SQLParser.DEFAULT = 23;
SQLParser.CURRENT_TIMESTAMP = 24;
SQLParser.TIMEZONE = 25;
SQLParser.ON = 26;
SQLParser.UPDATE = 27;
SQLParser.PRIMARY = 28;
SQLParser.KEY = 29;
SQLParser.CONSTRAINT = 30;
SQLParser.AUTOINCREMENT = 31;
SQLParser.SPECIAL_FEATURES = 32;
SQLParser.FULLTEXT = 33;
SQLParser.TRUE = 34;
SQLParser.FALSE = 35;
SQLParser.NEXTVAL = 36;
SQLParser.NOW = 37;
SQLParser.QUOTE = 38;
SQLParser.LPAREN = 39;
SQLParser.RPAREN = 40;
SQLParser.COMMA = 41;
SQLParser.SEMICOLON = 42;
SQLParser.EQUAL = 43;
SQLParser.DOUBLE_COLON = 44;
SQLParser.COMMENT = 45;
SQLParser.SPACES = 46;
SQLParser.SPECIAL_STRING = 47;
SQLParser.NUMBER = 48;
SQLParser.REAL = 49;
SQLParser.NAME = 50;
SQLParser.ANY = 51;

SQLParser.RULE_statements = 0;
SQLParser.RULE_statement = 1;
SQLParser.RULE_ignore = 2;
SQLParser.RULE_createStmt = 3;
SQLParser.RULE_element = 4;
SQLParser.RULE_ignorable = 5;
SQLParser.RULE_definition = 6;
SQLParser.RULE_type = 7;
SQLParser.RULE_nullability = 8;
SQLParser.RULE_defaultValue = 9;
SQLParser.RULE_attributes = 10;
SQLParser.RULE_name = 11;

class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_statements;
    }

	EOF() {
	    return this.getToken(SQLParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ignore = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IgnoreContext);
	    } else {
	        return this.getTypedRuleContext(IgnoreContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitStatements(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_statement;
    }

	createStmt() {
	    return this.getTypedRuleContext(CreateStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitStatement(this);
		}
	}


}



class IgnoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_ignore;
    }

	SEMICOLON() {
	    return this.getToken(SQLParser.SEMICOLON, 0);
	};

	COMMENT() {
	    return this.getToken(SQLParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterIgnore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitIgnore(this);
		}
	}


}



class CreateStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_createStmt;
        this.tableName = null;
    }

	CREATE() {
	    return this.getToken(SQLParser.CREATE, 0);
	};

	TABLE() {
	    return this.getToken(SQLParser.TABLE, 0);
	};

	LPAREN() {
	    return this.getToken(SQLParser.LPAREN, 0);
	};

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	SEMICOLON() {
	    return this.getToken(SQLParser.SEMICOLON, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	IF() {
	    return this.getToken(SQLParser.IF, 0);
	};

	NOT() {
	    return this.getToken(SQLParser.NOT, 0);
	};

	EXISTS() {
	    return this.getToken(SQLParser.EXISTS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SQLParser.COMMA);
	    } else {
	        return this.getToken(SQLParser.COMMA, i);
	    }
	};


	RPAREN() {
	    return this.getToken(SQLParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterCreateStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitCreateStmt(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_element;
    }

	definition() {
	    return this.getTypedRuleContext(DefinitionContext,0);
	};

	ignorable() {
	    return this.getTypedRuleContext(IgnorableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitElement(this);
		}
	}


}



class IgnorableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_ignorable;
    }

	COMMA() {
	    return this.getToken(SQLParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(SQLParser.RPAREN, 0);
	};

	KEY() {
	    return this.getToken(SQLParser.KEY, 0);
	};

	CONSTRAINT() {
	    return this.getToken(SQLParser.CONSTRAINT, 0);
	};

	SPECIAL_FEATURES() {
	    return this.getToken(SQLParser.SPECIAL_FEATURES, 0);
	};

	FULLTEXT() {
	    return this.getToken(SQLParser.FULLTEXT, 0);
	};

	PRIMARY() {
	    return this.getToken(SQLParser.PRIMARY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterIgnorable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitIgnorable(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_definition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	defaultValue() {
	    return this.getTypedRuleContext(DefaultValueContext,0);
	};

	nullability() {
	    return this.getTypedRuleContext(NullabilityContext,0);
	};

	attributes = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributesContext);
	    } else {
	        return this.getTypedRuleContext(AttributesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_type;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CharTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(SQLParser.CHAR, 0);
	};

	LPAREN() {
	    return this.getToken(SQLParser.LPAREN, 0);
	};

	NUMBER() {
	    return this.getToken(SQLParser.NUMBER, 0);
	};

	RPAREN() {
	    return this.getToken(SQLParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterCharType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitCharType(this);
		}
	}


}

SQLParser.CharTypeContext = CharTypeContext;

class DecimalTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        this.precision = null;;
        this.scale = null;;
        super.copyFrom(ctx);
    }

	NUMERIC() {
	    return this.getToken(SQLParser.NUMERIC, 0);
	};

	DECIMAL() {
	    return this.getToken(SQLParser.DECIMAL, 0);
	};

	LPAREN() {
	    return this.getToken(SQLParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(SQLParser.RPAREN, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SQLParser.NUMBER);
	    } else {
	        return this.getToken(SQLParser.NUMBER, i);
	    }
	};


	COMMA() {
	    return this.getToken(SQLParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDecimalType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDecimalType(this);
		}
	}


}

SQLParser.DecimalTypeContext = DecimalTypeContext;

class DatetimeTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DATETIME() {
	    return this.getToken(SQLParser.DATETIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDatetimeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDatetimeType(this);
		}
	}


}

SQLParser.DatetimeTypeContext = DatetimeTypeContext;

class IntegerTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INTEGER() {
	    return this.getToken(SQLParser.INTEGER, 0);
	};

	INT() {
	    return this.getToken(SQLParser.INT, 0);
	};

	UNSIGNED() {
	    return this.getToken(SQLParser.UNSIGNED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterIntegerType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitIntegerType(this);
		}
	}


}

SQLParser.IntegerTypeContext = IntegerTypeContext;

class TextTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TEXT() {
	    return this.getToken(SQLParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterTextType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitTextType(this);
		}
	}


}

SQLParser.TextTypeContext = TextTypeContext;

class TimestampTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TIMESTAMP() {
	    return this.getToken(SQLParser.TIMESTAMP, 0);
	};

	TIMEZONE() {
	    return this.getToken(SQLParser.TIMEZONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterTimestampType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitTimestampType(this);
		}
	}


}

SQLParser.TimestampTypeContext = TimestampTypeContext;

class SmallIntegerTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TINYINT() {
	    return this.getToken(SQLParser.TINYINT, 0);
	};

	SMALLINT() {
	    return this.getToken(SQLParser.SMALLINT, 0);
	};

	UNSIGNED() {
	    return this.getToken(SQLParser.UNSIGNED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterSmallIntegerType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitSmallIntegerType(this);
		}
	}


}

SQLParser.SmallIntegerTypeContext = SmallIntegerTypeContext;

class BlobTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BLOB() {
	    return this.getToken(SQLParser.BLOB, 0);
	};

	SUBTYPE() {
	    return this.getToken(SQLParser.SUBTYPE, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterBlobType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitBlobType(this);
		}
	}


}

SQLParser.BlobTypeContext = BlobTypeContext;

class VarcharTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(SQLParser.LPAREN, 0);
	};

	NUMBER() {
	    return this.getToken(SQLParser.NUMBER, 0);
	};

	RPAREN() {
	    return this.getToken(SQLParser.RPAREN, 0);
	};

	VARCHAR() {
	    return this.getToken(SQLParser.VARCHAR, 0);
	};

	CHARVAR() {
	    return this.getToken(SQLParser.CHARVAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterVarcharType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitVarcharType(this);
		}
	}


}

SQLParser.VarcharTypeContext = VarcharTypeContext;

class YearTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	YEAR() {
	    return this.getToken(SQLParser.YEAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterYearType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitYearType(this);
		}
	}


}

SQLParser.YearTypeContext = YearTypeContext;

class NullabilityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_nullability;
    }

	NULL() {
	    return this.getToken(SQLParser.NULL, 0);
	};

	NOT() {
	    return this.getToken(SQLParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterNullability(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitNullability(this);
		}
	}


}



class DefaultValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_defaultValue;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DefaultNextContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	NEXTVAL() {
	    return this.getToken(SQLParser.NEXTVAL, 0);
	};

	LPAREN() {
	    return this.getToken(SQLParser.LPAREN, 0);
	};

	SPECIAL_STRING() {
	    return this.getToken(SQLParser.SPECIAL_STRING, 0);
	};

	RPAREN() {
	    return this.getToken(SQLParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultNext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultNext(this);
		}
	}


}

SQLParser.DefaultNextContext = DefaultNextContext;

class DefaultSpecialContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	SPECIAL_STRING() {
	    return this.getToken(SQLParser.SPECIAL_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultSpecial(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultSpecial(this);
		}
	}


}

SQLParser.DefaultSpecialContext = DefaultSpecialContext;

class DefaultBoolContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	TRUE() {
	    return this.getToken(SQLParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(SQLParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultBool(this);
		}
	}


}

SQLParser.DefaultBoolContext = DefaultBoolContext;

class DefaultStringContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SQLParser.QUOTE);
	    } else {
	        return this.getToken(SQLParser.QUOTE, i);
	    }
	};


	NAME() {
	    return this.getToken(SQLParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultString(this);
		}
	}


}

SQLParser.DefaultStringContext = DefaultStringContext;

class DefaultNullContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	NULL() {
	    return this.getToken(SQLParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultNull(this);
		}
	}


}

SQLParser.DefaultNullContext = DefaultNullContext;

class DefaultTimeContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	CURRENT_TIMESTAMP() {
	    return this.getToken(SQLParser.CURRENT_TIMESTAMP, 0);
	};

	NOW() {
	    return this.getToken(SQLParser.NOW, 0);
	};

	LPAREN() {
	    return this.getToken(SQLParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(SQLParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultTime(this);
		}
	}


}

SQLParser.DefaultTimeContext = DefaultTimeContext;

class DefaultIntContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	NUMBER() {
	    return this.getToken(SQLParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultInt(this);
		}
	}


}

SQLParser.DefaultIntContext = DefaultIntContext;

class DefaultDoubleContext extends DefaultValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFAULT() {
	    return this.getToken(SQLParser.DEFAULT, 0);
	};

	REAL() {
	    return this.getToken(SQLParser.REAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterDefaultDouble(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitDefaultDouble(this);
		}
	}


}

SQLParser.DefaultDoubleContext = DefaultDoubleContext;

class AttributesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_attributes;
    }

	PRIMARY() {
	    return this.getToken(SQLParser.PRIMARY, 0);
	};

	KEY() {
	    return this.getToken(SQLParser.KEY, 0);
	};

	AUTOINCREMENT() {
	    return this.getToken(SQLParser.AUTOINCREMENT, 0);
	};

	CURRENT_TIMESTAMP() {
	    return this.getToken(SQLParser.CURRENT_TIMESTAMP, 0);
	};

	ON() {
	    return this.getToken(SQLParser.ON, 0);
	};

	UPDATE() {
	    return this.getToken(SQLParser.UPDATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterAttributes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitAttributes(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SQLParser.RULE_name;
    }

	NAME() {
	    return this.getToken(SQLParser.NAME, 0);
	};

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SQLParser.QUOTE);
	    } else {
	        return this.getToken(SQLParser.QUOTE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SQLListener ) {
	        listener.exitName(this);
		}
	}


}




SQLParser.StatementsContext = StatementsContext; 
SQLParser.StatementContext = StatementContext; 
SQLParser.IgnoreContext = IgnoreContext; 
SQLParser.CreateStmtContext = CreateStmtContext; 
SQLParser.ElementContext = ElementContext; 
SQLParser.IgnorableContext = IgnorableContext; 
SQLParser.DefinitionContext = DefinitionContext; 
SQLParser.TypeContext = TypeContext; 
SQLParser.NullabilityContext = NullabilityContext; 
SQLParser.DefaultValueContext = DefaultValueContext; 
SQLParser.AttributesContext = AttributesContext; 
SQLParser.NameContext = NameContext; 
