<?php
/**
 * Freeform for Craft CMS.
 *
 * @author        Solspace, Inc.
 * @copyright     Copyright (c) 2008-2022, Solspace, Inc.
 *
 * @see           https://docs.solspace.com/craft/freeform
 *
 * @license       https://docs.solspace.com/license-agreement
 */

namespace Solspace\Freeform\Fields\Traits;

use Solspace\Freeform\Fields\FieldInterface;

trait SingleStaticValueTrait
{
    /** @var string */
    protected $value;

    /**
     * @return string
     */
    public function getValue(): mixed
    {
        return $this->value;
    }

    /**
     * Does not allow modification of the set value.
     *
     * @param string $value
     *
     * @return $this
     */
    public function setValue(mixed $value): FieldInterface
    {
        return $this;
    }
}