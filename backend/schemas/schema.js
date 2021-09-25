import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import project from './project'
import social from './social'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		project,
		social
	]),
})
