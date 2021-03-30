import { plural, singular } from 'pluralize';
import { DefaultNamingStrategy } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class TypeOrmNamingStrategy extends DefaultNamingStrategy {
  tableName(className, customName) {
    return customName || plural(snakeCase(className));
  }

  columnName(propertyName, customName, embeddedPrefixes) {
    return (
      snakeCase(embeddedPrefixes.join('_')) +
      (customName || snakeCase(propertyName))
    );
  }

  relationName(propertyName) {
    return snakeCase(propertyName);
  }

  joinColumnName(relationName, referencedColumnName) {
    return snakeCase(singular(relationName) + '_' + referencedColumnName);
  }

  joinTableName(firstTableName, secondTableName) {
    return snakeCase(firstTableName + '_' + secondTableName);
  }

  joinTableColumnName(tableName, propertyName, columnName) {
    return snakeCase(singular(tableName) + '_' + (columnName || propertyName));
  }

  classTableInheritanceParentColumnName(
    parentTableName,
    parentTableIdPropertyName,
  ) {
    return snakeCase(
      singular(parentTableName) + '_' + parentTableIdPropertyName,
    );
  }
}
