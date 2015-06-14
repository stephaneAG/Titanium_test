class Object < BasicObject
  include Kernel

  ARGF = ARGF
  ARGV = []
  ArgumentError = ArgumentError
  Array = Array
  BasicObject = BasicObject
  Bignum = Bignum
  Binding = Binding
  CROSS_COMPILING = nil
  Class = Class
  Comparable = Comparable
  Complex = Complex
  Config = RbConfig
  Data = Data
  Date = Date
  DateTime = DateTime
  Dir = Dir
  ENV = {"GEM_PATH"=>"/Users/stephaneadamgarnier/.rvm/gems/ruby-1.9.3-p0:/Users/stephaneadamgarnier/.rvm/gems/ruby-1.9.3-p0@global", "SHLVL"=>"1", "__CF_USER_TEXT_ENCODING"=>"0x1F5:0:91", "rvm_version"=>"1.10.1", "__array_start"=>"0", "rvm_verbose_flag"=>"0", "PWD"=>"/Applications/Titanium Studio/TitaniumStudio.app/Contents/MacOS", "rvm_prefix"=>"/Users/stephaneadamgarnier", "LOGNAME"=>"stephaneadamgarnier", "IRBRC"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/.irbrc", "rvm_dump_environment_flag"=>"0", "RUBY_VERSION"=>"ruby-1.9.3-p0", "SSH_AUTH_SOCK"=>"/tmp/launch-8h7spC/Listeners", "MY_RUBY_HOME"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0", "rvm_trace_flag"=>"0", "SHELL"=>"/bin/bash", "rvm_bin_path"=>"/Users/stephaneadamgarnier/.rvm/bin", "TMPDIR"=>"/var/folders/aR/aRUJi3CfEsiLnfd3pPlWnU+++TI/-Tmp-/", "rvm_clang_flag"=>"0", "APP_ICON_71588"=>"../Resources/titanium.icns", "JAVA_STARTED_ON_FIRST_THREAD_71588"=>"1", "escape_flag"=>"1", "_first"=>"0", "PATH"=>"/opt/local/bin:/opt/local/sbin:/opt/local/bin:/opt/local/sbin:/opt/local/bin:/opt/local/sbin:/opt/local/bin:/opt/local/sbin:/Users/stephaneadamgarnier/.rvm/gems/ruby-1.9.3-p0/bin:/Users/stephaneadamgarnier/.rvm/gems/ruby-1.9.3-p0@global/bin:/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/bin:/Users/stephaneadamgarnier/.rvm/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/local/git/bin:/usr/X11/bin:/opt/local/bin", "GEM_HOME"=>"/Users/stephaneadamgarnier/.rvm/gems/ruby-1.9.3-p0", "_second"=>"1", "APTANA_VERSION"=>"3.0.4.1325689477", "COMMAND_MODE"=>"unix2003", "DISPLAY"=>"/tmp/launch-fSDbQp/org.x:0", "USER"=>"stephaneadamgarnier", "com.apple.java.jvmTask"=>"JNI", "HOME"=>"/Users/stephaneadamgarnier", "rvm_debug_flag"=>"0", "rvm_path"=>"/Users/stephaneadamgarnier/.rvm", "Apple_PubSub_Socket_Render"=>"/tmp/launch-KUIw6F/Render", "rvm_reload_flag"=>"0", "rvm_pretty_print_flag"=>"auto", "LANG"=>"en_US.UTF-8"}
  EOFError = EOFError
  Encoding = Encoding
  EncodingError = EncodingError
  Enumerable = Enumerable
  Enumerator = Enumerator
  Errno = Errno
  Etc = Etc
  Exception = Exception
  FALSE = false
  FalseClass = FalseClass
  Fiber = Fiber
  FiberError = FiberError
  File = File
  FileTest = FileTest
  FileUtils = FileUtils
  Fixnum = Fixnum
  Float = Float
  FloatDomainError = FloatDomainError
  GC = GC
  Gem = Gem
  Hash = Hash
  IO = IO
  IOError = IOError
  IndexError = IndexError
  Integer = Integer
  Interrupt = Interrupt
  Kernel = Kernel
  KeyError = KeyError
  LoadError = LoadError
  LocalJumpError = LocalJumpError
  Marshal = Marshal
  MatchData = MatchData
  Math = Math
  Method = Method
  Module = Module
  Mutex = Mutex
  NIL = nil
  NameError = NameError
  NilClass = NilClass
  NoMemoryError = NoMemoryError
  NoMethodError = NoMethodError
  NotImplementedError = NotImplementedError
  Numeric = Numeric
  OUTPUT_PATH = "/Users/stephaneadamgarnier/Documents/Titanium Studio Workspace/.metadata/.plugins/com.aptana.ruby.core/730619135/4/"
  Object = Object
  ObjectSpace = ObjectSpace
  Proc = Proc
  Process = Process
  Psych = Psych
  RUBY_COPYRIGHT = "ruby - Copyright (C) 1993-2011 Yukihiro Matsumoto"
  RUBY_DESCRIPTION = "ruby 1.9.3p0 (2011-10-30 revision 33570) [x86_64-darwin10.8.0]"
  RUBY_ENGINE = "ruby"
  RUBY_PATCHLEVEL = 0
  RUBY_PLATFORM = "x86_64-darwin10.8.0"
  RUBY_RELEASE_DATE = "2011-10-30"
  RUBY_REVISION = 33570
  RUBY_VERSION = "1.9.3"
  Random = Random
  Range = Range
  RangeError = RangeError
  Rational = Rational
  RbConfig = RbConfig
  Regexp = Regexp
  RegexpError = RegexpError
  RubyVM = RubyVM
  RuntimeError = RuntimeError
  STDERR = IO.new
  STDIN = IO.new
  STDOUT = IO.new
  ScanError = StringScanner::Error
  ScriptError = ScriptError
  SecurityError = SecurityError
  Signal = Signal
  SignalException = SignalException
  StandardError = StandardError
  StopIteration = StopIteration
  String = String
  StringIO = StringIO
  StringScanner = StringScanner
  Struct = Struct
  Syck = Syck
  Symbol = Symbol
  SyntaxError = SyntaxError
  SystemCallError = SystemCallError
  SystemExit = SystemExit
  SystemStackError = SystemStackError
  TOPLEVEL_BINDING = #<Binding:0x00000100887330>
  TRUE = true
  TSort = TSort
  Thread = Thread
  ThreadError = ThreadError
  ThreadGroup = ThreadGroup
  Time = Time
  TrueClass = TrueClass
  TypeError = TypeError
  URI = URI
  UnboundMethod = UnboundMethod
  YAML = Psych
  ZeroDivisionError = ZeroDivisionError
  Zlib = Zlib

  def self.yaml_tag(arg0)
  end


  def psych_to_yaml(arg0, arg1, *rest)
  end

  def to_yaml(arg0, arg1, *rest)
  end

  def to_yaml_properties
  end


  protected


  private

  def dir_names(arg0)
  end

  def file_name(arg0)
  end

  def get_classes
  end

  def grab_instance_method(arg0, arg1)
  end

  def print_args(arg0)
  end

  def print_instance_method(arg0, arg1)
  end

  def print_method(arg0, arg1, arg2, arg3, arg4, *rest)
  end

  def print_type(arg0)
  end

  def print_value(arg0)
  end

end
