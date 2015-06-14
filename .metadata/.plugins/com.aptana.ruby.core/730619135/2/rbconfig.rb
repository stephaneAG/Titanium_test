module RbConfig

  CONFIG = {"DESTDIR"=>"", "MAJOR"=>"1", "MINOR"=>"9", "TEENY"=>"1", "PATCHLEVEL"=>"0", "INSTALL"=>"/usr/bin/install -c", "EXEEXT"=>"", "prefix"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0", "ruby_install_name"=>"ruby", "RUBY_INSTALL_NAME"=>"ruby", "RUBY_SO_NAME"=>"ruby.1.9.1", "exec"=>"exec", "ruby_pc"=>"ruby-1.9.pc", "PACKAGE"=>"ruby", "BUILTIN_TRANSSRCS"=>" newline.c", "USE_RUBYGEMS"=>"YES", "MANTYPE"=>"doc", "NROFF"=>"/usr/bin/nroff", "vendorhdrdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/include/ruby-1.9.1/vendor_ruby", "sitehdrdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/include/ruby-1.9.1/site_ruby", "rubyhdrdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/include/ruby-1.9.1", "UNIVERSAL_INTS"=>"", "UNIVERSAL_ARCHNAMES"=>"", "configure_args"=>" '--prefix=/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0' '--enable-shared' '--disable-install-doc' '--with-libyaml' '--with-opt-dir=/Users/stephaneadamgarnier/.rvm/usr' 'CC=/usr/bin/gcc-4.2'", "vendordir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/vendor_ruby", "sitedir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/site_ruby", "ruby_version"=>"1.9.1", "sitearch"=>"x86_64-darwin10.8.0", "arch"=>"x86_64-darwin10.8.0", "RI_BASE_NAME"=>"ri", "ridir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/ri", "rubylibprefix"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby", "MAKEFILES"=>"Makefile", "THREAD_MODEL"=>"pthread", "SYMBOL_PREFIX"=>"_", "EXPORT_PREFIX"=>"", "COMMON_HEADERS"=>"", "COMMON_MACROS"=>"", "COMMON_LIBS"=>"", "MAINLIBS"=>"", "ENABLE_SHARED"=>"yes", "DLDLIBS"=>"", "SOLIBS"=>"", "LIBRUBYARG_SHARED"=>"-lruby.1.9.1", "LIBRUBYARG_STATIC"=>"-lruby.1.9.1-static", "LIBRUBYARG"=>"-lruby.1.9.1", "LIBRUBY"=>"libruby.1.9.1.dylib", "LIBRUBY_ALIASES"=>"libruby.1.9.dylib libruby.dylib", "LIBRUBY_SO"=>"libruby.1.9.1.dylib", "LIBRUBY_A"=>"libruby.1.9.1-static.a", "RUBYW_INSTALL_NAME"=>"", "rubyw_install_name"=>"", "LIBRUBY_DLDFLAGS"=>"-Wl,-undefined,dynamic_lookup -Wl,-multiply_defined,suppress -Wl,-flat_namespace -install_name /Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/libruby.1.9.1.dylib -current_version 1.9.1 -compatibility_version 1.9.1 -Wl,-unexported_symbol,_Init_* -Wl,-unexported_symbol,*_threadptr_*  $(XLDFLAGS)", "LIBRUBY_LDSHARED"=>"/usr/bin/gcc-4.2 -dynamiclib", "warnflags"=>"-Wextra -Wno-unused-parameter -Wno-parentheses -Wno-long-long -Wno-missing-field-initializers -Werror=pointer-arith -Werror=write-strings -Werror=declaration-after-statement -Werror=shorten-64-to-32 -Werror=implicit-function-declaration", "debugflags"=>"-ggdb", "optflags"=>"-O3", "cxxflags"=>" -O3 -ggdb -Wextra -Wno-unused-parameter -Wno-parentheses -Wno-long-long -Wno-missing-field-initializers -Werror=pointer-arith -Werror=write-strings -Werror=declaration-after-statement -Werror=shorten-64-to-32 -Werror=implicit-function-declaration", "cflags"=>" -O3 -ggdb -Wextra -Wno-unused-parameter -Wno-parentheses -Wno-long-long -Wno-missing-field-initializers -Werror=pointer-arith -Werror=write-strings -Werror=declaration-after-statement -Werror=shorten-64-to-32 -Werror=implicit-function-declaration", "cppflags"=>"", "NULLCMD"=>":", "INSTALLDOC"=>"nodoc", "CAPITARGET"=>"nodoc", "RDOCTARGET"=>"nodoc", "EXECUTABLE_EXTS"=>"", "ARCHFILE"=>"", "LIBRUBY_RELATIVE"=>"no", "EXTOUT"=>".ext", "PREP"=>"miniruby", "TEST_RUNNABLE"=>"yes", "setup"=>"Setup", "EXTSTATIC"=>"", "STRIP"=>"strip -A -n", "TRY_LINK"=>"", "LIBPATHENV"=>"DYLD_LIBRARY_PATH", "RPATHFLAG"=>"", "LIBPATHFLAG"=>" -L%s", "LINK_SO"=>"", "LIBEXT"=>"a", "DLEXT2"=>"", "DLEXT"=>"bundle", "LDSHAREDXX"=>"g++ -dynamic -bundle", "LDSHARED"=>"/usr/bin/gcc-4.2 -dynamic -bundle", "CCDLFLAGS"=>"-fno-common", "STATIC"=>"", "ARCH_FLAG"=>"", "DLDFLAGS"=>"-Wl,-undefined,dynamic_lookup -Wl,-multiply_defined,suppress -Wl,-flat_namespace", "ALLOCA"=>"", "WERRORFLAG"=>"-Werror", "CHDIR"=>"cd -P", "RMALL"=>"rm -fr", "RMDIRS"=>"rmdir -p", "RMDIR"=>"rmdir", "CP"=>"cp", "RM"=>"rm -f", "PKG_CONFIG"=>"", "DOXYGEN"=>"", "DOT"=>"", "MAKEDIRS"=>"mkdir -p", "MKDIR_P"=>"mkdir -p", "INSTALL_DATA"=>"/usr/bin/install -c -m 644", "INSTALL_SCRIPT"=>"/usr/bin/install -c", "INSTALL_PROGRAM"=>"/usr/bin/install -c", "SET_MAKE"=>"", "LN_S"=>"ln -s", "NM"=>"nm", "DLLWRAP"=>"", "WINDRES"=>"", "OBJCOPY"=>":", "OBJDUMP"=>"", "ASFLAGS"=>"", "AS"=>"as", "AR"=>"ar", "RANLIB"=>"ranlib", "try_header"=>"", "COUTFLAG"=>"-o ", "OUTFLAG"=>"-o ", "CPPOUTFILE"=>"-o conftest.i", "GNU_LD"=>"no", "GCC"=>"yes", "EGREP"=>"/usr/bin/grep -E", "GREP"=>"/usr/bin/grep", "CPP"=>"/usr/bin/gcc-4.2 -E", "CXXFLAGS"=>" -O3 -ggdb -Wextra -Wno-unused-parameter -Wno-parentheses -Wno-long-long -Wno-missing-field-initializers -Werror=pointer-arith -Werror=write-strings -Werror=declaration-after-statement -Werror=shorten-64-to-32 -Werror=implicit-function-declaration", "CXX"=>"g++", "OBJEXT"=>"o", "CPPFLAGS"=>"-D_XOPEN_SOURCE -D_DARWIN_C_SOURCE  ", "LDFLAGS"=>"-L. -L/usr/local/lib", "CFLAGS"=>" -O3 -ggdb -Wextra -Wno-unused-parameter -Wno-parentheses -Wno-long-long -Wno-missing-field-initializers -Werror=pointer-arith -Werror=write-strings -Werror=declaration-after-statement -Werror=shorten-64-to-32 -Werror=implicit-function-declaration  -fno-common -pipe", "CC"=>"/usr/bin/gcc-4.2", "target_os"=>"darwin10.8.0", "target_vendor"=>"apple", "target_cpu"=>"x86_64", "target"=>"x86_64-apple-darwin10.8.0", "host_os"=>"darwin10.8.0", "host_vendor"=>"apple", "host_cpu"=>"x86_64", "host"=>"x86_64-apple-darwin10.8.0", "RUBYW_BASE_NAME"=>"rubyw", "RUBY_BASE_NAME"=>"ruby", "build_os"=>"darwin10.8.0", "build_vendor"=>"apple", "build_cpu"=>"x86_64", "build"=>"x86_64-apple-darwin10.8.0", "RUBY_RELEASE_DATE"=>"2011-10-30", "RUBY_PROGRAM_VERSION"=>"1.9.3", "BASERUBY"=>"ruby", "target_alias"=>"", "host_alias"=>"", "build_alias"=>"", "LIBS"=>"-lpthread -ldl -lobjc", "ECHO_T"=>"", "ECHO_N"=>"", "ECHO_C"=>"\\\\c", "DEFS"=>"", "mandir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/man", "localedir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/locale", "libdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib", "psdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/doc/ruby", "pdfdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/doc/ruby", "dvidir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/doc/ruby", "htmldir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/doc/ruby", "infodir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/info", "docdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share/doc/ruby", "oldincludedir"=>"/usr/include", "includedir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/include", "localstatedir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/var", "sharedstatedir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/com", "sysconfdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/etc", "datadir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share", "datarootdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/share", "libexecdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/libexec", "sbindir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/sbin", "bindir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/bin", "exec_prefix"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0", "PACKAGE_URL"=>"", "PACKAGE_BUGREPORT"=>"", "PACKAGE_STRING"=>"", "PACKAGE_VERSION"=>"", "PACKAGE_TARNAME"=>"", "PACKAGE_NAME"=>"", "PATH_SEPARATOR"=>":", "SHELL"=>"/bin/sh", "rubylibdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/1.9.1", "archdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/1.9.1/x86_64-darwin10.8.0", "sitelibdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/site_ruby/1.9.1", "sitearchdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/site_ruby/1.9.1/x86_64-darwin10.8.0", "vendorlibdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/vendor_ruby/1.9.1", "vendorarchdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/vendor_ruby/1.9.1/x86_64-darwin10.8.0", "topdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/1.9.1/x86_64-darwin10.8.0"}
  DESTDIR = 
  MAKEFILE_CONFIG = {"DESTDIR"=>"", "MAJOR"=>"1", "MINOR"=>"9", "TEENY"=>"1", "PATCHLEVEL"=>"0", "INSTALL"=>"/usr/bin/install -c", "EXEEXT"=>"", "prefix"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0", "ruby_install_name"=>"ruby", "RUBY_INSTALL_NAME"=>"ruby", "RUBY_SO_NAME"=>"ruby.1.9.1", "exec"=>"exec", "ruby_pc"=>"ruby-1.9.pc", "PACKAGE"=>"ruby", "BUILTIN_TRANSSRCS"=>" newline.c", "USE_RUBYGEMS"=>"YES", "MANTYPE"=>"doc", "NROFF"=>"/usr/bin/nroff", "vendorhdrdir"=>"$(rubyhdrdir)/vendor_ruby", "sitehdrdir"=>"$(rubyhdrdir)/site_ruby", "rubyhdrdir"=>"$(includedir)/$(RUBY_BASE_NAME)-$(ruby_version)", "UNIVERSAL_INTS"=>"", "UNIVERSAL_ARCHNAMES"=>"", "configure_args"=>" '--prefix=/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0' '--enable-shared' '--disable-install-doc' '--with-libyaml' '--with-opt-dir=/Users/stephaneadamgarnier/.rvm/usr' 'CC=/usr/bin/gcc-4.2'", "vendordir"=>"$(rubylibprefix)/vendor_ruby", "sitedir"=>"$(rubylibprefix)/site_ruby", "ruby_version"=>"1.9.1", "sitearch"=>"$(arch)", "arch"=>"x86_64-darwin10.8.0", "RI_BASE_NAME"=>"ri", "ridir"=>"$(datarootdir)/$(RI_BASE_NAME)", "rubylibprefix"=>"$(libdir)/$(RUBY_BASE_NAME)", "MAKEFILES"=>"Makefile", "THREAD_MODEL"=>"pthread", "SYMBOL_PREFIX"=>"_", "EXPORT_PREFIX"=>"", "COMMON_HEADERS"=>"", "COMMON_MACROS"=>"", "COMMON_LIBS"=>"", "MAINLIBS"=>"", "ENABLE_SHARED"=>"yes", "DLDLIBS"=>"", "SOLIBS"=>"", "LIBRUBYARG_SHARED"=>"-l$(RUBY_SO_NAME)", "LIBRUBYARG_STATIC"=>"-l$(RUBY_SO_NAME)-static", "LIBRUBYARG"=>"$(LIBRUBYARG_SHARED)", "LIBRUBY"=>"$(LIBRUBY_SO)", "LIBRUBY_ALIASES"=>"lib$(RUBY_BASE_NAME).$(MAJOR).$(MINOR).dylib lib$(RUBY_INSTALL_NAME).dylib", "LIBRUBY_SO"=>"lib$(RUBY_SO_NAME).dylib", "LIBRUBY_A"=>"lib$(RUBY_SO_NAME)-static.a", "RUBYW_INSTALL_NAME"=>"", "rubyw_install_name"=>"", "LIBRUBY_DLDFLAGS"=>"-Wl,-undefined,dynamic_lookup -Wl,-multiply_defined,suppress -Wl,-flat_namespace -install_name $(libdir)/$(LIBRUBY_SO) -current_version $(MAJOR).$(MINOR).$(TEENY) -compatibility_version $(ruby_version) -Wl,-unexported_symbol,_Init_* -Wl,-unexported_symbol,*_threadptr_*  $(XLDFLAGS)", "LIBRUBY_LDSHARED"=>"$(CC) -dynamiclib", "warnflags"=>"-Wextra -Wno-unused-parameter -Wno-parentheses -Wno-long-long -Wno-missing-field-initializers -Werror=pointer-arith -Werror=write-strings -Werror=declaration-after-statement -Werror=shorten-64-to-32 -Werror=implicit-function-declaration", "debugflags"=>"-ggdb", "optflags"=>"-O3", "cxxflags"=>" $(optflags) $(debugflags) $(warnflags)", "cflags"=>" $(optflags) $(debugflags) $(warnflags)", "cppflags"=>"", "NULLCMD"=>":", "INSTALLDOC"=>"nodoc", "CAPITARGET"=>"nodoc", "RDOCTARGET"=>"nodoc", "EXECUTABLE_EXTS"=>"", "ARCHFILE"=>"", "LIBRUBY_RELATIVE"=>"no", "EXTOUT"=>".ext", "PREP"=>"miniruby$(EXEEXT)", "TEST_RUNNABLE"=>"yes", "setup"=>"Setup", "EXTSTATIC"=>"", "STRIP"=>"strip -A -n", "TRY_LINK"=>"", "LIBPATHENV"=>"DYLD_LIBRARY_PATH", "RPATHFLAG"=>"", "LIBPATHFLAG"=>" -L%s", "LINK_SO"=>"", "LIBEXT"=>"a", "DLEXT2"=>"", "DLEXT"=>"bundle", "LDSHAREDXX"=>"$(CXX) -dynamic -bundle", "LDSHARED"=>"$(CC) -dynamic -bundle", "CCDLFLAGS"=>"-fno-common", "STATIC"=>"", "ARCH_FLAG"=>"", "DLDFLAGS"=>"-Wl,-undefined,dynamic_lookup -Wl,-multiply_defined,suppress -Wl,-flat_namespace", "ALLOCA"=>"", "WERRORFLAG"=>"-Werror", "CHDIR"=>"cd -P", "RMALL"=>"rm -fr", "RMDIRS"=>"rmdir -p", "RMDIR"=>"rmdir", "CP"=>"cp", "RM"=>"rm -f", "PKG_CONFIG"=>"", "DOXYGEN"=>"", "DOT"=>"", "MAKEDIRS"=>"mkdir -p", "MKDIR_P"=>"mkdir -p", "INSTALL_DATA"=>"$(INSTALL) -m 644", "INSTALL_SCRIPT"=>"$(INSTALL)", "INSTALL_PROGRAM"=>"$(INSTALL)", "SET_MAKE"=>"", "LN_S"=>"ln -s", "NM"=>"nm", "DLLWRAP"=>"", "WINDRES"=>"", "OBJCOPY"=>":", "OBJDUMP"=>"", "ASFLAGS"=>"", "AS"=>"as", "AR"=>"ar", "RANLIB"=>"ranlib", "try_header"=>"", "COUTFLAG"=>"-o ", "OUTFLAG"=>"-o ", "CPPOUTFILE"=>"-o conftest.i", "GNU_LD"=>"no", "GCC"=>"yes", "EGREP"=>"/usr/bin/grep -E", "GREP"=>"/usr/bin/grep", "CPP"=>"$(CC) -E", "CXXFLAGS"=>"$(cxxflags)", "CXX"=>"g++", "OBJEXT"=>"o", "CPPFLAGS"=>"-D_XOPEN_SOURCE -D_DARWIN_C_SOURCE $(DEFS) $(cppflags)", "LDFLAGS"=>"-L. -L/usr/local/lib", "CFLAGS"=>"$(cflags)  -fno-common -pipe", "CC"=>"/usr/bin/gcc-4.2", "target_os"=>"darwin10.8.0", "target_vendor"=>"apple", "target_cpu"=>"x86_64", "target"=>"x86_64-apple-darwin10.8.0", "host_os"=>"darwin10.8.0", "host_vendor"=>"apple", "host_cpu"=>"x86_64", "host"=>"x86_64-apple-darwin10.8.0", "RUBYW_BASE_NAME"=>"rubyw", "RUBY_BASE_NAME"=>"ruby", "build_os"=>"darwin10.8.0", "build_vendor"=>"apple", "build_cpu"=>"x86_64", "build"=>"x86_64-apple-darwin10.8.0", "RUBY_RELEASE_DATE"=>"2011-10-30", "RUBY_PROGRAM_VERSION"=>"1.9.3", "BASERUBY"=>"ruby", "target_alias"=>"", "host_alias"=>"", "build_alias"=>"", "LIBS"=>"-lpthread -ldl -lobjc", "ECHO_T"=>"", "ECHO_N"=>"", "ECHO_C"=>"\\\\c", "DEFS"=>"", "mandir"=>"$(datarootdir)/man", "localedir"=>"$(datarootdir)/locale", "libdir"=>"$(exec_prefix)/lib", "psdir"=>"$(docdir)", "pdfdir"=>"$(docdir)", "dvidir"=>"$(docdir)", "htmldir"=>"$(docdir)", "infodir"=>"$(datarootdir)/info", "docdir"=>"$(datarootdir)/doc/$(PACKAGE)", "oldincludedir"=>"/usr/include", "includedir"=>"$(prefix)/include", "localstatedir"=>"$(prefix)/var", "sharedstatedir"=>"$(prefix)/com", "sysconfdir"=>"$(prefix)/etc", "datadir"=>"$(datarootdir)", "datarootdir"=>"$(prefix)/share", "libexecdir"=>"$(exec_prefix)/libexec", "sbindir"=>"$(exec_prefix)/sbin", "bindir"=>"$(exec_prefix)/bin", "exec_prefix"=>"$(prefix)", "PACKAGE_URL"=>"", "PACKAGE_BUGREPORT"=>"", "PACKAGE_STRING"=>"", "PACKAGE_VERSION"=>"", "PACKAGE_TARNAME"=>"", "PACKAGE_NAME"=>"", "PATH_SEPARATOR"=>":", "SHELL"=>"/bin/sh", "rubylibdir"=>"$(rubylibprefix)/$(ruby_version)", "archdir"=>"$(rubylibdir)/$(arch)", "sitelibdir"=>"$(sitedir)/$(ruby_version)", "sitearchdir"=>"$(sitelibdir)/$(sitearch)", "vendorlibdir"=>"$(vendordir)/$(ruby_version)", "vendorarchdir"=>"$(vendorlibdir)/$(sitearch)", "topdir"=>"/Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0/lib/ruby/1.9.1/x86_64-darwin10.8.0"}
  TOPDIR = /Users/stephaneadamgarnier/.rvm/rubies/ruby-1.9.3-p0

  def self.datadir(arg0)
  end

  def self.expand(arg0, arg1, arg2, *rest)
  end

  def self.ruby
  end



  protected


  private

end