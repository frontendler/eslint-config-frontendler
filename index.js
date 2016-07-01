module.exports = {
    "env": {
		"node": 1,
		"browser": 1
	},
	"ecmaFeatures": {
		"classes": true
	},
	"globals": {
		"jQuery":false,
		"$":true
	},
	"rules": {
		"quotes": [2, "double"],
		"camelcase": 1,
		"strict": 0,
		"eqeqeq": 0,
		"new-cap":0,
		"no-alert": 1,
		"no-unused-vars": [2, {"vars": "all", "args": "none"}]
	}
};
