SRCS := $(wildcard src/js/*.js)
OUTS := $(SRCS:src/js/%.js=dist/%.js)

all: $(OUTS)

dist/%.js: src/js/%.js
	./node_modules/.bin/webpack $< $@
